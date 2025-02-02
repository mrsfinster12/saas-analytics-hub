import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Search, Globe } from "lucide-react";

const Dashboard = () => {
  const [url, setUrl] = useState("");
  const { toast } = useToast();
  const [analyses, setAnalyses] = useState([
    {
      url: "example.com",
      date: "2024-02-20",
      score: 85,
      issues: 12,
    },
  ]);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Analysis Started",
      description: "We're analyzing your website. This may take a few minutes.",
    });
    // TODO: Implement actual analysis
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">Website Analysis</h1>
          <form onSubmit={handleAnalyze} className="flex gap-4">
            <Input
              type="url"
              placeholder="Enter website URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" />
              Analyze
            </Button>
          </form>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyses.map((analysis) => (
            <Card key={analysis.url} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold">{analysis.url}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{analysis.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {analysis.score}
                  </div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Issues found:</span>
                  <span className="font-semibold">{analysis.issues}</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;