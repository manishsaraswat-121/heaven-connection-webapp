import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
type Props = { params: Promise<{ slug: string }> };

export default async function BlogPost({ params }: Props){
  const { slug } = await params;
  const { MDXRemote } = await import('next-mdx-remote/rsc');
  const postPath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
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
