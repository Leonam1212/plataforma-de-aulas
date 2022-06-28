import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSON_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

interface SidebarProps {
  burguerOpen: boolean;
}

export function Sidebar(props: SidebarProps) {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSON_QUERY);

  return (
    <>
      <aside className="hidden lg:block w-[348px] bg-gray-700 p-6 border-l border-gray-600">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>

        <div className="flex flex-col gap-8">
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            );
          })}
        </div>
      </aside>

      {props.burguerOpen && (
        <aside className="fixed h-full  z-[9999999999999999999999] w-screen  lg:hidden bg-gray-700 p-6 border-l border-gray-600">
          <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronograma de aulas
          </span>

          <div className="flex flex-col h-[75%] overflow-y-auto  gap-8">
            {data?.lessons.map((lesson) => {
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
                />
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
}
