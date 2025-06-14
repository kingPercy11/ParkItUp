import Image from "next/image"
import { Star, MapPin, Plus, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import "../app.css"

export default function Component() {
  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Avatar className="w-32 h-32 border-2 border-blue-400">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Ali Husni" />
              <AvatarFallback className="text-2xl bg-gray-700 text-blue-300">AH</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white">Ali Husni</h1>
              <p className="text-gray-400 text-lg">alihusni@example.com</p>
            </div>
          </div>
          <Button className="edit-profile-btn rounded-full px-6 py-3">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="stats-card border-0">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold mb-1 text-white">4.8</div>
              <div className="text-blue-100">Rating</div>
            </CardContent>
          </Card>

          <Card className="stats-card border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-1 text-white">1,257</div>
              <div className="text-blue-100">Parking booked</div>
            </CardContent>
          </Card>

          <Card className="stats-card border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold mb-1 text-white">517 hr</div>
              <div className="text-blue-100">Total hours</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-300 uppercase tracking-wide">Personal Information</h2>
            <Card className="profile-card border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Full name</span>
                  <span className="font-medium text-white">Ali Husni</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date of birth</span>
                  <span className="font-medium text-white">February 9, 1990</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Telephone</span>
                  <span className="font-medium text-white">+123 456 7890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Address</span>
                  <span className="font-medium text-white">Semarang City, Indonesia</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vehicle */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-blue-300 uppercase tracking-wide">Vehicle</h2>
              <Button className="add-vehicle-btn rounded-full px-4 py-2 font-semibold">
                <Plus className="w-4 h-4 mr-2" />
                Add Vehicle
              </Button>
            </div>
            <Card className="profile-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">Porsche 817T</h3>
                    <Image
                      src="/placeholder.svg?height=120&width=200"
                      alt="Porsche 817T"
                      width={200}
                      height={120}
                      className="rounded-lg border border-blue-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-300 uppercase tracking-wide">Recent Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="profile-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="activity-icon rounded-full p-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 text-white">Disneyland Park</h3>
                    <p className="text-gray-400">3 hours • April 15, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="profile-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="activity-icon rounded-full p-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 text-white">21 Iacoli Parking</h3>
                    <p className="text-gray-400">2 hours • April 2, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="profile-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="activity-icon rounded-full p-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 text-white">Patil Mall Parking</h3>
                    <p className="text-gray-400">2 hours • April 2, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="profile-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="activity-icon rounded-full p-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 text-white">Parking Lot C</h3>
                    <p className="text-gray-400">5 hours • March 20, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
