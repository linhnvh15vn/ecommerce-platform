import { Route, Routes } from 'react-router';

import TagDetail from '@/modules/tags/pages/tag-detail';
import TagList from '@/modules/tags/pages/tag-list';

export default function TagModule() {
  return (
    <Routes>
      <Route index element={<TagList />} />
      <Route path=":id" element={<TagDetail />} />
    </Routes>
  );
}
