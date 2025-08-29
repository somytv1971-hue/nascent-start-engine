
import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Emergency Calls Handled",
      description: "Successfully managed emergency situations"
    },
    {
      number: "15,000+",
      label: "Families Assisted",
      description: "Provided aid and support to families in need"
    },
    {
      number: "৳2.5M+",
      label: "Donations Collected",
      description: "Transparent fund collection and distribution"
    },
    {
      number: "500+",
      label: "Active Volunteers",
      description: "Dedicated volunteers serving communities"
    },
    {
      number: "64",
      label: "Districts Covered",
      description: "Nationwide emergency response network"
    },
    {
      number: "99.8%",
      label: "Response Rate",
      description: "Reliability in emergency situations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real numbers showing our commitment to serving Bangladesh in times of need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-blue-100">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
