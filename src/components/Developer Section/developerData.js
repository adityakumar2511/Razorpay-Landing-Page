// src/data/developerData.js
const developerData = {
  ticker: [
    "python", "php", "node.js", "ruby", "go", "dotnet", "rust", "curl", "java"
  ],

  hero: {
    eyebrow: "Razorpay is built",
    title: "Clean APIs, first-class SDKs and transparent docs to get you from idea to production fast.",
    ctas: [
      { label: "View docs", href: "#docs", variant: "ghost" },
      { label: "Get API keys", href: "#signup", variant: "solid" }
    ]
  },

  features: [
    {
      id: "integration",
      icon: "🔌",
      title: "Integrations",
      desc: "Plug-and-play SDKs, plugins and integrations for popular frameworks and platforms.",
      href: "#integrations"
    },
    {
      id: "api",
      icon: "📚",
      title: "API Reference",
      desc: "Concise, example-rich docs for every endpoint, with request/response samples.",
      href: "#api"
    },
    {
      id: "webhooks",
      icon: "📨",
      title: "Webhooks",
      desc: "Reliable event delivery with retries, signatures and built-in dashboards.",
      href: "#webhooks"
    }
  ],

  codeSamples: {
    curl: {
      label: "curl",
      snippet:
`curl -X POST "https://api.example.com/v1/orders" \\
  -H "Authorization: Bearer {{API_KEY}}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 50000,
    "currency": "INR",
    "receipt": "order_rcptid_11"
  }'`
    },
    node: {
      label: "Node.js",
      snippet:
`const Razorpay = require('razorpay');
const rzp = new Razorpay({ key_id: process.env.KEY, key_secret: process.env.SECRET });

(async () => {
  const order = await rzp.orders.create({ amount: 50000, currency: 'INR', receipt: 'rcpt_11' });
  console.log(order);
})();`
    },
    python: {
      label: "Python",
      snippet:
`import razorpay
client = razorpay.Client(auth=(KEY, SECRET))
order = client.order.create({'amount':50000, 'currency':'INR', 'receipt':'rcpt_11'})
print(order)`
    }
  },

  meta: {
    trust: "Trusted by 20,000+ businesses",
    supportLine: "24/7 developer support"
  }
};

export default developerData;
