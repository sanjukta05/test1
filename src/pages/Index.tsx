
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your Lovable Project
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your project has been updated to the latest Lovable version!
        </p>
        <Badge variant="default" className="text-sm">
          Latest Version
        </Badge>
      </div>
    </div>
  );
};

export default Index;
