export default function WorkExperience() {
  const experiences = [
    {
      company: 'Company 1',
      position: 'UI/UX Designer',
      startDate: '2022',
      endDate: '2023',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
    },
    {
      company: 'Company 2',
      position: 'Frontend Developer',
      startDate: '2021',
      endDate: '2022',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ],
    },
  ]
  return (
    <div id="work-experience" className="flex flex-col gap-6">
      {experiences.map((experience) => {
        return (
          <>
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex-wrap items-center gap-2">
                <h1 className="text-lg font-semibold sm:text-xl">
                  {experience.company}
                </h1>

                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-[1.5px] rounded-full bg-gray-200" />
                  <h2 className="text-xs text-cyan-400 sm:text-sm">
                    {experience.position}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-light text-gray-300">
                    {experience.startDate} - {experience.endDate}
                  </h1>
                </div>
              </div>
            </div>
            <ul
              key={experience.company}
              className="flex w-fit list-disc flex-col gap-4 px-4 marker:text-lg marker:text-cyan-400"
            >
              {experience.description.map((description) => {
                return (
                  <li className="font-medium text-gray-300">{description}</li>
                )
              })}
            </ul>
          </>
        )
      })}
    </div>
  )
}
