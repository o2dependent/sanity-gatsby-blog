export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6017975034cec9371de08ed9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5k2xae5z',
                  apiId: 'de1ed32d-1a6f-47f0-9761-7def8fd834e1'
                },
                {
                  buildHookId: '60179751d9325c373681c7ed',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jhxc2gom',
                  apiId: 'fa37cbeb-a66d-49b9-a18c-c4a427d6cb87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/o2dependent/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jhxc2gom.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
