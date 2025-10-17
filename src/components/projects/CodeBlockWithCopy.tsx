import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockWithCopyProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export default function CodeBlockWithCopy({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = true,
  highlightLines = [],
}: CodeBlockWithCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="relative group rounded-lg overflow-hidden border border-border bg-slate-950 my-6">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-slate-900">
          <span className="text-sm text-slate-400 font-mono">{filename}</span>
          <span className="text-xs text-slate-500 uppercase">{language}</span>
        </div>
      )}

      {/* Code Container */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>

        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-slate-50 font-mono">
            {lines.map((line, index) => (
              <div
                key={index}
                className={`${
                  highlightLines.includes(index + 1)
                    ? 'bg-blue-500/10 border-l-2 border-blue-500 -ml-4 pl-4'
                    : ''
                }`}
              >
                {showLineNumbers && (
                  <span className="inline-block w-8 text-slate-600 select-none mr-4">
                    {index + 1}
                  </span>
                )}
                <span>{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
