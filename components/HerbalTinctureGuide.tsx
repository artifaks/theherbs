'use client'

import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Beaker, Droplet, Leaf } from 'lucide-react'

export default function HerbalTinctureGuide() {
  const [activeTab, setActiveTab] = useState("ingredients")

  return (
    <div className="min-h-screen bg-green-50">
      {/* Banner */}
      <div className="bg-[#fdf6e3] text-[#5c4c3d] py-4 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-[#b58d3c]" />
            <h1 className="text-2xl font-bold">Wellness is Golden</h1>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm italic">Nurturing Nature's Wisdom for a Healthier You</p>
            <a href="https://wellnessisgolden.com" className="text-xs text-[#8b6e42] hover:underline">
              wellnessisgolden.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-green-800">The Art of Herbal Tinctures</h1>
          <p className="text-xl text-green-600">A Comprehensive Guide to Crafting Nature's Remedies</p>
        </header>

        <Card className="bg-white border-green-200">
          <CardHeader className="bg-green-100">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Beaker className="h-6 w-6 text-green-600" />
              What is a Herbal Tincture?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-800">
            <p>A herbal tincture is a concentrated liquid extract of herbs, typically made using alcohol, glycerin, or vinegar as a solvent. Tinctures are a time-honored method of preserving and concentrating the beneficial compounds of herbs, allowing for easy consumption and long shelf life.</p>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-lg">
          <TabsList className="grid w-full grid-cols-3 bg-green-100">
            <TabsTrigger value="ingredients" className="data-[state=active]:bg-white data-[state=active]:text-green-800">Ingredients</TabsTrigger>
            <TabsTrigger value="procedure" className="data-[state=active]:bg-white data-[state=active]:text-green-800">Procedure</TabsTrigger>
            <TabsTrigger value="usage" className="data-[state=active]:bg-white data-[state=active]:text-green-800">Usage & Storage</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredients">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-green-800">Essential Ingredients</CardTitle>
                <CardDescription className="text-green-600">What you'll need to create your tincture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Leaf className="h-6 w-6 mt-1 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Herbs</h3>
                    <p className="text-green-700">Choose high-quality, organic herbs. Fresh herbs are often preferred, but dried herbs can also be used.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Droplet className="h-6 w-6 mt-1 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Solvent</h3>
                    <p className="text-green-700">Common choices include:</p>
                    <ul className="list-disc list-inside pl-4 space-y-2 text-green-700">
                      <li>80 proof (40% alcohol) vodka - A versatile choice for most herbs</li>
                      <li>Vegetable glycerin - For alcohol-free tinctures</li>
                      <li>Apple cider vinegar - A good option for children's remedies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="procedure">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-green-800">Step-by-Step Procedure</CardTitle>
                <CardDescription className="text-green-600">Follow these steps to create your tincture</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 text-green-700">
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">1.</span>
                    <p>Clean and chop your herbs. For dried herbs, grind them coarsely.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">2.</span>
                    <p>Fill a clean glass jar 1/3 to 1/2 full with the herbs.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">3.</span>
                    <p>Pour your chosen solvent over the herbs, making sure they are completely covered.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">4.</span>
                    <p>Seal the jar tightly and label it with the contents and date.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">5.</span>
                    <p>Store the jar in a cool, dark place for 4-6 weeks, shaking it gently every day.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">6.</span>
                    <p>After the steeping period, strain the liquid through cheesecloth or a fine mesh strainer.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-lg text-green-800">7.</span>
                    <p>Transfer the tincture to dark glass bottles with droppers for storage.</p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="usage">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-green-800">Usage & Storage</CardTitle>
                <CardDescription className="text-green-600">How to use and store your tincture safely</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-green-800">Usage</h3>
                  <p className="text-green-700">Typical usage is 1-2 droppers full, taken 2-3 times daily or as directed by a healthcare professional. Always start with a small dose to test for any adverse reactions.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-green-800">Storage</h3>
                  <p className="text-green-700">Store your tinctures in a cool, dark place. Properly stored, alcohol-based tinctures can last for several years. Glycerin and vinegar-based tinctures typically last 1-2 years.</p>
                </div>
                <Alert className="border-amber-300 bg-amber-50">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Safety First</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Always label your tinctures clearly with the herb name, date, and solvent used. Keep out of reach of children and pets.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="bg-white border-green-200">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">Popular Healthy Herbal Tinctures</CardTitle>
            <CardDescription className="text-green-600">Some of the most beneficial herbs for tinctures</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-green-700">
              <li>
                <h3 className="font-semibold text-green-800">Echinacea</h3>
                <p>Known for its immune-boosting properties and potential to reduce the duration of common colds.</p>
              </li>
              <li>
                <h3 className="font-semibold text-green-800">Elderberry</h3>
                <p>Rich in antioxidants and may help support immune function and alleviate flu symptoms.</p>
              </li>
              <li>
                <h3 className="font-semibold text-green-800">Turmeric</h3>
                <p>Contains curcumin, which has powerful anti-inflammatory and antioxidant properties.</p>
              </li>
              <li>
                <h3 className="font-semibold text-green-800">Ginger</h3>
                <p>May help with digestion, reduce nausea, and has anti-inflammatory effects.</p>
              </li>
              <li>
                <h3 className="font-semibold text-green-800">Milk Thistle</h3>
                <p>Often used to support liver health and may have protective effects against certain toxins.</p>
              </li>
              <li>
                <h3 className="font-semibold text-green-800">Valerian Root</h3>
                <p>Commonly used to promote relaxation and improve sleep quality.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border-green-200">
          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">Sample Recipe: Echinacea Tincture</CardTitle>
            <CardDescription className="text-green-600">A popular herb known for its immune-boosting properties</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>1 part fresh Echinacea root, leaves, and flowers (or 1/2 part dried)</li>
              <li>2 parts 80 proof vodka</li>
              <li>Follow the general procedure outlined above</li>
              <li>Suggested use: 1/4 to 1/2 teaspoon up to three times daily, or as directed by an herbalist</li>
            </ul>
          </CardContent>
        </Card>

        <Alert className="border-amber-300 bg-amber-50 mt-8">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Important Health Notice</AlertTitle>
          <AlertDescription className="text-amber-700">
            This guide is for educational purposes only. Always consult with a qualified herbalist or healthcare professional before preparing or using any herbal remedies. Some herbs can interact with medications or may not be suitable for certain health conditions.
          </AlertDescription>
        </Alert>

        <footer className="text-center text-sm text-green-600">
          <p>Remember to always practice responsible herbalism and prioritize your health and safety.</p>
        </footer>
      </div>
    </div>
  )
}