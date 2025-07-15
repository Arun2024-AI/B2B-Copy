"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle } from "lucide-react"

export default function RequestQuotePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    productName: "",
    quantity: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      console.log("Quote request data:", formData)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Quote Request Submitted!</CardTitle>
            <CardDescription className="text-lg">Thank you for your interest in our products.</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <p className="mb-6">
              We've received your request and will get back to you within 24-48 business hours with a customized quote.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Request a Quote</h1>
        <p className="text-muted-foreground">
          Fill out the form below to receive a customized quote for your business needs
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
            <CardDescription>Please provide your contact details so we can reach you with a quote.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company Ltd."
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold mb-4">Product Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name/Category</Label>
                  <Input
                    id="productName"
                    name="productName"
                    placeholder="e.g., Electronics, Office Supplies"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 100 units"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Additional Details</Label>
              <Textarea
                id="details"
                name="details"
                placeholder="Please provide any specific requirements or questions you have about the product."
                rows={5}
                value={formData.details}
                onChange={handleChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Quote Request"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}