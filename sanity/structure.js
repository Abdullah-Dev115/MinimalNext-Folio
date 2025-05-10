// https://www.sanity.io/docs/structure-builder-cheat-sheet

import { StructureResolver } from 'sanity/structure'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('post').title('Posts'),
    ])
