import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "support@travelbooking.com",
      href: "mailto:support@travelbooking.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Travel Ave, Tourism City, TC 12345",
      href: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "24/7 Support",
      href: "#",
    },
  ]

  return (
    <div className="space-y-4">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <a
            key={index}
            href={detail.href}
            className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md hover:bg-accent/5 transition-all duration-300 group animate-slide-up-delayed"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors duration-200 break-words">
                  {detail.value}
                </p>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
