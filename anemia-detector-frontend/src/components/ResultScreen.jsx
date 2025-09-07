import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Footer from "./Footer";
import Link from "next/link";
import { ExternalLink, Heart, Info, RotateCcw } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";

const ResultScreen = ({ image, onRetake, result }) => {
  const { isAnemic, confidence_level } = result;
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 bg-gray-50 backdrop-blur-sm  top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <Heart className="w-4 h-4" />
              HemaLens
            </Link>
          </div>
        </header>

        <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:mb-10">
          <div className="w-full max-w-2xl space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-black mb-2">
                Analysis Completed
              </h1>
              <p className="text-gray-600">
                Our AI has analyzed your palm image and generated the results
                below.
              </p>
            </div>

            <Card
              className={`p-4 border-3 ${
                isAnemic
                  ? "border-red-300 bg-red-50"
                  : "border-green-300 bg-green-50"
              }`}
            >
              <CardTitle className="text-xl font-bold">
                Analyzed Image
              </CardTitle>
              <CardContent className="p-4">
                <div className="relative aspect-square max-w-md mx-auto bg-[#f1f9fe] rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt="Palm being analyzed"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className={`${
                    isAnemic
                      ? " border-2 bg-red-100 text-red-800 border-red-200"
                      : "bg-green-100 text-green-800 border-green-200"
                  } rounded-lg p-6 mt-10`}
                >
                  <h1 className="text-xl font-semibold">Analysis Result</h1>
                  <p className="text-3xl font-bold ml-10 py-2">
                    {isAnemic ? "Anemic" : "Non-Anemic"}
                  </p>
                  <div className="flex items-center gap-2 text-base text-gray-600">
                    <Info className="w-4 h-4" />
                    <span>Confidence Level: {confidence_level}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Alert
              className={
                isAnemic
                  ? "border-orange-200 bg-orange-50"
                  : "border-blue-200 bg-blue-50"
              }
            >
              <Info className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Medical Disclaimer:</strong> This AI screening tool is
                for informational purposes only and should not replace
                professional medical advice, diagnosis, or treatment.
                {isAnemic &&
                  " Please consult with a healthcare provider for proper blood tests and medical evaluation."}
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={onRetake}
                variant="outline"
                className="text-lg px-8 bg-transparent cursor-pointer"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Scan Again
              </Button>

              <Link
                href="https://www.mayoclinic.org/diseases-conditions/anemia/symptoms-causes/syc-20351360"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="text-lg px-8 w-full sm:auto bg-[#079eff] hover:bg-[#0384d4] cursor-pointer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Learn More About Anemia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultScreen;
