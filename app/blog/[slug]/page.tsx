import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = { params: { slug: string }};

export default function BlogPost({ params }: Props){
  const postPath = path.join(process.cwd(), 'content', 'blog', `${params.slug}.mdx`);
  if(!fs.existsSync(postPath)) return notFound();
  const content = fs.readFileSync(postPath, 'utf-8');

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article className="prose">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
