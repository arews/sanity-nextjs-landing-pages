export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e94ac5aaafa79752f70a425',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3u1hse7v',
                  apiId: '3a85f6b4-f2e3-4f02-93f2-9960ee10e846'
                },
                {
                  buildHookId: '5e94ac5baafa798e5570a2df',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o29wjxnk',
                  apiId: '22e36089-6818-42d1-a0ed-d4c80950c300'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arews/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o29wjxnk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
