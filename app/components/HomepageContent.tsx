
// トップページのメインコンテンツを表示するコンポーネント
import Link from 'next/link';
import { projects } from '../data/projects';

export function HomepageContent() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link href="/work">
          View Projects
        </Link>
      </div>
    </div>
  );
}
