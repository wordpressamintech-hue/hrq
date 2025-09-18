import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, User, Clock, X, Share2, BookOpen, Facebook, Twitter, Linkedin, Mail, Link, Copy } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useRouter } from "./Router";
import { useState } from "react";

interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags?: string[];
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  const { navigate } = useRouter();
  const [shareOpen, setShareOpen] = useState(false);
  
  if (!article) return null;

  const articleUrl = `${window.location.origin}/insights/${article.id}`;
  const shareText = `${article.title} by ${article.author} - ${article.excerpt}`;

  const handleCopyLink = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(articleUrl);
        toast.success("Article link copied to clipboard!");
        setShareOpen(false);
        return;
      }
      
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = articleUrl;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        toast.success("Article link copied to clipboard!");
        setShareOpen(false);
      } else {
        throw new Error("Copy command failed");
      }
    } catch (error) {
      console.error("Failed to copy link:", error);
      
      // Final fallback - show the URL in a prompt
      if (window.prompt) {
        window.prompt("Copy this link:", articleUrl);
      } else {
        toast.error("Unable to copy link. Please copy manually: " + articleUrl);
      }
      setShareOpen(false);
    }
  };

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
    setShareOpen(false);
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(shareText)}&via=HRQuantum`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    setShareOpen(false);
  };

  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    setShareOpen(false);
  };

  const handleShareEmail = () => {
    const subject = `Interesting HR Insight: ${article.title}`;
    const body = `I thought you might find this HR insight interesting:\n\n${article.title}\nBy ${article.author}\n\n${article.excerpt}\n\nRead the full article: ${articleUrl}\n\nShared from HRQ - Human Resource Quantum`;
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    setShareOpen(false);
  };

  const handleScheduleConsultation = () => {
    onClose(); // Close the modal first
    navigate("contact"); // Navigate to contact page
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{article.title}</DialogTitle>
          <DialogDescription>
            {article.excerpt}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[90vh]">
          <div className="relative">
            {/* Article Header Image */}
            <div className="relative h-64 md:h-80">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white border-0"
                onClick={onClose}
              >
                <X className="w-4 h-4" />
              </Button>
              
              {/* Article Category Badge */}
              <div className="absolute bottom-4 left-6">
                <Badge className="bg-[#00ABF5] text-white px-3 py-1">
                  {article.category}
                </Badge>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8">
              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Deep Dive</span>
                </div>
                <Popover open={shareOpen} onOpenChange={setShareOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto text-[#00ABF5] hover:bg-[#00ABF5]/10"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-3" align="end">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Share this article</h4>
                      
                      {/* Copy Link */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-2 hover:bg-gray-100"
                        onClick={handleCopyLink}
                      >
                        <Copy className="w-4 h-4 mr-3 text-gray-600" />
                        <span className="text-gray-700">Copy link</span>
                      </Button>

                      {/* LinkedIn */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-2 hover:bg-blue-50"
                        onClick={handleShareLinkedIn}
                      >
                        <Linkedin className="w-4 h-4 mr-3 text-blue-600" />
                        <span className="text-gray-700">Share on LinkedIn</span>
                      </Button>

                      {/* Twitter/X */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-2 hover:bg-gray-50"
                        onClick={handleShareTwitter}
                      >
                        <Twitter className="w-4 h-4 mr-3 text-gray-900" />
                        <span className="text-gray-700">Share on X (Twitter)</span>
                      </Button>

                      {/* Facebook */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-2 hover:bg-blue-50"
                        onClick={handleShareFacebook}
                      >
                        <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                        <span className="text-gray-700">Share on Facebook</span>
                      </Button>

                      {/* Email */}
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-2 hover:bg-green-50"
                        onClick={handleShareEmail}
                      >
                        <Mail className="w-4 h-4 mr-3 text-green-600" />
                        <span className="text-gray-700">Share via Email</span>
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Article Excerpt */}
              <div className="bg-[#00ABF5]/5 border-l-4 border-[#00ABF5] p-4 mb-8 rounded-r">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-800 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Article Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-[#00ABF5]/10 hover:text-[#00ABF5] cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Found this article helpful?</h4>
                    <p className="text-sm text-gray-600">Share it with your network to spread valuable HR insights.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      onClick={handleShareLinkedIn}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-700 border-gray-200 hover:bg-gray-50"
                      onClick={handleShareTwitter}
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      X
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-200 hover:bg-green-50"
                      onClick={handleShareEmail}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600 border-gray-200 hover:bg-gray-50"
                      onClick={handleCopyLink}
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-10 p-6 bg-gradient-to-r from-[#00ABF5]/5 to-[#005EF5]/5 rounded-lg border border-[#00ABF5]/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Transform Your HR Strategy?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our experts are here to help you implement these insights in your organization. 
                  Let's discuss how we can support your HR transformation journey.
                </p>
                <Button 
                  style={{backgroundColor: '#00ABF5'}}
                  className="text-white hover:opacity-90"
                  onClick={handleScheduleConsultation}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}