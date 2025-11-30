import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Copy, Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateContent, GenerateContentParams } from "@/lib/gemini";
import { useToast } from "@/hooks/use-toast";

interface GeneratedItem {
  id: string;
  prompt: string;
  content: string;
  contentType: string;
  timestamp: Date;
}

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState<GenerateContentParams["contentType"]>("blog");
  const [tone, setTone] = useState<GenerateContentParams["tone"]>("professional");
  const [length, setLength] = useState<GenerateContentParams["length"]>("medium");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [history, setHistory] = useState<GeneratedItem[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a topic or title to generate content.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedContent(null);

    try {
      const content = await generateContent({
        prompt,
        contentType,
        tone,
        length,
      });

      setGeneratedContent(content);

      const newItem: GeneratedItem = {
        id: Date.now().toString(),
        prompt,
        content,
        contentType,
        timestamp: new Date(),
      };

      setHistory((prev) => [newItem, ...prev].slice(0, 10));

      toast({
        title: "Content generated!",
        description: "Your content has been successfully generated.",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async (content: string, id: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  const handleClear = () => {
    setGeneratedContent(null);
    setPrompt("");
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Content Type</label>
            <Select value={contentType} onValueChange={(v: any) => setContentType(v)}>
              <SelectTrigger className="glass-panel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-panel">
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="script">Script</SelectItem>
                <SelectItem value="song">Song</SelectItem>
                <SelectItem value="essay">Essay</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Tone</label>
            <Select value={tone} onValueChange={(v: any) => setTone(v)}>
              <SelectTrigger className="glass-panel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-panel">
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="inspirational">Inspirational</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Length</label>
            <Select value={length} onValueChange={(v: any) => setLength(v)}>
              <SelectTrigger className="glass-panel">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-panel">
                <SelectItem value="short">Short</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="long">Long</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. The Future of AI in Healthcare..."
            className="glass-panel min-h-[200px] text-lg resize-none focus-visible:ring-primary"
          />
        </div>

        {/* Generate Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-8 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white shadow-lg shadow-orange-500/50 transition-all duration-300"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              "GENERATE"
            )}
          </Button>
        </div>
      </motion.div>

      {/* Result Display */}
      {generatedContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Generated Content</h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(generatedContent, "current")}
                className="glass-button"
              >
                {copiedId === "current" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="glass-button"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-wrap text-foreground">{generatedContent}</p>
          </div>
        </motion.div>
      )}

      {/* History */}
      {history.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">Recent History</h3>
          <div className="space-y-3">
            {history.map((item) => (
              <div key={item.id} className="glass-panel p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {item.contentType}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.timestamp.toLocaleString()}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(item.content, item.id)}
                    className="glass-button"
                  >
                    {copiedId === item.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-sm font-medium">{item.prompt}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContentGenerator;
