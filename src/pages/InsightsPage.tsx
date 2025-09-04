import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { EmailService } from "../components/EmailService";

export function InsightsPage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubscribe = async () => {
    if (!newsletterEmail) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);

    try {
      const result = await EmailService.sendNewsletterSubscription(newsletterEmail);
      
      if (result.success) {
        toast.success("Thank you for subscribing! We'll add you to our newsletter.");
        setNewsletterEmail("");
      } else {
        throw new Error(result.error || 'Subscription failed');
      }
    } catch (error) {
      toast.error("Sorry, there was an error processing your subscription. Please try again or contact us directly at info@hr-q.com");
    } finally {
      setIsSubscribing(false);
    }
  };

  const articles = [
    {
      id: 1,
      title: "The Future of HR: How AI is Transforming Talent Management",
      excerpt: "Explore how artificial intelligence is revolutionizing recruitment, employee engagement, and performance management in modern organizations.",
      category: "HR Tech",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1Nzg3OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true
    },
    {
      id: 2,
      title: "ISO 30414: Your Complete Guide to HR Reporting Standards",
      excerpt: "Understanding the international standard for human capital reporting and how it can transform your HR metrics and decision-making.",
      category: "Compliance",
      author: "Dr. Michael Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwYXVkaXR8ZW58MXx8fHwxNzU1Nzg3OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    },
    {
      id: 3,
      title: "Building a Global Remote Workforce: Lessons from 2024",
      excerpt: "Key strategies for managing distributed teams across different time zones, cultures, and regulatory environments.",
      category: "Talent Strategy",
      author: "Amara Okafor",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB3b3JrJTIwdGVhbXN8ZW58MXx8fHwxNzU1Nzg3OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    },
    {
      id: 4,
      title: "Leadership in Crisis: HR's Role in Organizational Resilience",
      excerpt: "How HR leaders can build resilient organizations that thrive during uncertainty and emerge stronger from challenges.",
      category: "Leadership",
      author: "David Rodriguez",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwY3Jpc2lzfGVufDF8fHx8MTc1NTc4NzkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    },
    {
      id: 5,
      title: "The ROI of Employee Experience: Measuring What Matters",
      excerpt: "Data-driven approaches to measuring and improving employee experience, with real metrics that impact your bottom line.",
      category: "HR Tech",
      author: "Jennifer Liu",
      date: "February 20, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NTc4NzkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    },
    {
      id: 6,
      title: "Navigating Multi-Country HR Compliance in 2024",
      excerpt: "Essential guide to managing HR compliance across multiple jurisdictions, including recent regulatory changes and best practices.",
      category: "Compliance",
      author: "Maria Santos",
      date: "February 15, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb21wbGlhbmNlfGVufDF8fHx8MTc1NTc4NzkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    }
  ];

  const categories = ["All", "HR Tech", "Compliance", "Talent Strategy", "Leadership"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articles.filter(article => 
    selectedCategory === "All" || article.category === selectedCategory
  );

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGluc2lnaHRzJTIwZGF0YSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTU4ODgyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Business insights data analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ABF5]/80 to-[#005EF5]/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Insights & Resources</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of HR trends with expert insights, industry analysis, and actionable strategies from our team of HR professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                style={selectedCategory === category ? { backgroundColor: '#00ABF5' } : {}}
                className={selectedCategory === category ? "text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "All" && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <Badge className="bg-[#00ABF5] text-white">Featured Article</Badge>
            </div>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4 bg-[#00ABF5]/10 text-[#00ABF5]">
                    {featuredArticle.category}
                  </Badge>
                  <CardTitle className="text-3xl text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <Button 
                    style={{backgroundColor: '#00ABF5'}}
                    className="text-white hover:opacity-90 w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {(selectedCategory !== "All" || !featuredArticle) && (
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <Badge variant="secondary" className="w-fit mb-2 bg-[#00ABF5]/10 text-[#00ABF5]">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl text-gray-900 leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Button variant="outline" size="sm" className="text-[#00ABF5] border-[#00ABF5] hover:bg-[#00ABF5] hover:text-white">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00ABF5] to-[#005EF5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with HR Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and get the latest HR trends, best practices, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              size="lg"
              className="bg-white text-[#00ABF5] hover:bg-gray-100 px-8 py-3 disabled:opacity-50"
              onClick={handleNewsletterSubscribe}
              disabled={isSubscribing}
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}