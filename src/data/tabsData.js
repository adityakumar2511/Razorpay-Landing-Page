// data/tabsData.js

/**
 * Export: TABS_DATA
 * Structure:
 * [
 *   {
 *     id: "accept",
 *     label: "Accept Payments",
 *     meta: "Top",
 *     panels: [ { id, title, desc, badge, image, href, tag }, ... ]
 *   },
 *   ...
 * ]
 *
 * Update image paths (image:) to match your public folder.
 */

export const TABS_DATA = [
  {
    id: "accept",
    label: "Accept Payments",
    meta: "Top",
    panels: [
      {
        id: "accept-1",
        title: "Payment Gateway",
        desc: "Secure, scalable gateway for cards, UPI & wallets with one integration.",
        badge: "Popular",
        image: "/tabs/gateway.png",
        href: "/payments/gateway",
        tag: "Integration",
      },
      {
        id: "accept-2",
        title: "Payment Links",
        desc: "Generate links and collect payments over WhatsApp, SMS or email — no website needed.",
        image: "/tabs/links.png",
        href: "/payments/links",
        tag: "No-code",
      },
      {
        id: "accept-3",
        title: "Point of Sale (POS)",
        desc: "In-person payments with POS devices that reconcile automatically.",
        image: "/tabs/pos.png",
        href: "/payments/pos",
        tag: "Hardware",
      },
    ],
  },

  {
    id: "payouts",
    label: "Make Payouts",
    meta: "New",
    panels: [
      {
        id: "payouts-1",
        title: "Bulk Payouts",
        desc: "Pay thousands of vendors/employees in one go via CSV or API.",
        image: "/tabs/bulk-payouts.png",
        href: "/payouts/bulk",
        tag: "Scale",
      },
      {
        id: "payouts-2",
        title: "Vendor Portal",
        desc: "Self-serve portal for vendors to update details and track payments.",
        image: "/tabs/vendor-portal.png",
        href: "/payouts/portal",
        tag: "Self-serve",
      },
      {
        id: "payouts-3",
        title: "Scheduled Payouts",
        desc: "Automate recurring payouts for payroll, commissions & subscriptions.",
        image: "/tabs/schedule.png",
        href: "/payouts/schedule",
        tag: "Automation",
      },
    ],
  },

  {
    id: "banking",
    label: "Start Business Banking",
    panels: [
      {
        id: "banking-1",
        title: "Business Accounts",
        desc: "Open a business account quickly — manage collections and payouts in one place.",
        image: "/tabs/business-account.png",
        href: "/banking/accounts",
        tag: "Accounts",
      },
      {
        id: "banking-2",
        title: "Debit Cards",
        desc: "Give your team physical & virtual cards with spend controls.",
        image: "/tabs/debit-cards.png",
        href: "/banking/cards",
        tag: "Cards",
      },
      {
        id: "banking-3",
        title: "Cash Management",
        desc: "Smart reconciliation and cash flow tools for finance teams.",
        image: "/tabs/cash-management.png",
        href: "/banking/cash",
        tag: "Finance",
      },
    ],
  },

  {
    id: "credit",
    label: "Get Credit",
    panels: [
      {
        id: "credit-1",
        title: "Business Loans",
        desc: "Flexible business credit lines to manage working capital and growth.",
        image: "/tabs/loans.png",
        href: "/credit/loans",
        tag: "Financing",
      },
      {
        id: "credit-2",
        title: "Invoice Financing",
        desc: "Convert unpaid invoices into instant cash for smoother operations.",
        image: "/tabs/invoice-finance.png",
        href: "/credit/invoice",
        tag: "Cashflow",
      },
      {
        id: "credit-3",
        title: "Credit Cards for Business",
        desc: "Corporate card solutions with rewards and expense controls.",
        image: "/tabs/business-cards.png",
        href: "/credit/cards",
        tag: "Cards",
      },
    ],
  },

  {
    id: "payroll",
    label: "Automate Payroll",
    panels: [
      {
        id: "payroll-1",
        title: "Payroll Automation",
        desc: "Compute salaries, taxes and run payroll with compliance-ready reports.",
        image: "/tabs/payroll.png",
        href: "/payroll/automate",
        tag: "HR",
      },
      {
        id: "payroll-2",
        title: "Employee Benefits",
        desc: "Offer benefits and reimbursements with easy claims flow.",
        image: "/tabs/benefits.png",
        href: "/payroll/benefits",
        tag: "Benefits",
      },
      {
        id: "payroll-3",
        title: "Tax & Compliance",
        desc: "Stay compliant with automatic TDS, reports and e-filing aids.",
        image: "/tabs/tax.png",
        href: "/payroll/tax",
        tag: "Compliance",
      },
    ],
  },

  {
    id: "other",
    label: "Other",
    panels: [
      {
        id: "other-1",
        title: "Developer APIs",
        desc: "Extensive APIs and SDKs to integrate payments and webhooks.",
        image: "/tabs/api.png",
        href: "/developers",
        tag: "API",
      },
      {
        id: "other-2",
        title: "Analytics",
        desc: "Deep reporting tools to monitor business metrics and revenue.",
        image: "/tabs/analytics.png",
        href: "/analytics",
        tag: "Insights",
      },
      {
        id: "other-3",
        title: "Partner Programs",
        desc: "Join our partner network for growth, integrations & referrals.",
        image: "/tabs/partners.png",
        href: "/partners",
        tag: "Ecosystem",
      },
    ],
  },
];

export default TABS_DATA;
