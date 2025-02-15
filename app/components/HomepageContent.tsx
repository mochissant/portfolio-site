
import Link from 'next/link';
import { projects } from '../data/projects';

export function HomepageContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <div className="grid gap-4">
        <Link
          href="/work"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
