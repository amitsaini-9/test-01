import {
  AlertTriangle,
  Activity,
  Globe,
  BarChart3,
  MapPin,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShimmerButton } from "@/components/ui/aceternity/shimmer-button";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <ShimmerButton>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Report Incident
          </ShimmerButton>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Events"
          value="24"
          description="Currently monitored disaster events"
          icon={AlertTriangle}
          trend={12}
          trendDescription="from last week"
        />
        <StatCard
          title="Alert Level"
          value="Moderate"
          description="Global disaster activity level"
          icon={Activity}
          trend={-3}
          trendDescription="from last month"
        />
        <StatCard
          title="Affected Areas"
          value="16"
          description="Regions with active disasters"
          icon={Globe}
          trend={5}
          trendDescription="from last month"
        />
        <StatCard
          title="Data Sources"
          value="1,248"
          description="Active data collection points"
          icon={BarChart3}
        />
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Events</TabsTrigger>
          <TabsTrigger value="severe">Severe Events</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Disaster Events</CardTitle>
              <CardDescription>
                The latest reported disasters from around the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Flooding in Eastern Thailand",
                    type: "Flood",
                    time: "2 hours ago",
                    location: "Chanthaburi, Thailand",
                    severity: "Moderate",
                  },
                  {
                    title: "Wildfire in California",
                    type: "Fire",
                    time: "5 hours ago",
                    location: "Northern California, USA",
                    severity: "Severe",
                  },
                  {
                    title: "Earthquake off the coast of Japan",
                    type: "Earthquake",
                    time: "12 hours ago",
                    location: "Miyagi Prefecture, Japan",
                    severity: "Moderate",
                  },
                  {
                    title: "Hurricane approaching Florida",
                    type: "Hurricane",
                    time: "1 day ago",
                    location: "Gulf of Mexico",
                    severity: "High",
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{event.title}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className="text-sm">{event.time}</span>
                        <span
                          className={`text-xs ${
                            event.severity === "Severe"
                              ? "text-red-500"
                              : event.severity === "High"
                              ? "text-orange-500"
                              : "text-yellow-500"
                          }`}
                        >
                          {event.severity}
                        </span>
                      </div>
                      <div
                        className={`rounded-full px-2 py-1 text-xs ${
                          event.type === "Flood"
                            ? "bg-blue-100 text-blue-800"
                            : event.type === "Fire"
                            ? "bg-red-100 text-red-800"
                            : event.type === "Earthquake"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {event.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="severe" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Severe Events</CardTitle>
              <CardDescription>
                High-priority disaster events requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar content structure for severe events */}
              <p>Severe events content placeholder</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trending Events</CardTitle>
              <CardDescription>
                Disaster events with rapidly increasing attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Similar content structure for trending events */}
              <p>Trending events content placeholder</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
