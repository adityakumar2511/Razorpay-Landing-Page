// =============================================
// PayFlow Navigation + Country API Data Module
// =============================================

// Header / Navbar Navigation Items
export const NAV_ITEMS = [
  { id: 'home', title: 'Home', href: '/' },
  { id: 'products', title: 'Products', href: '/products' },
  { id: 'solutions', title: 'Solutions', href: '/solutions' },
  { id: 'pricing', title: 'Pricing', href: '/pricing' },
  { id: 'docs', title: 'Developers', href: '/developers' },
  { id: 'resources', title: 'Resources', href: '/resources' },
];

// ---------------------------------------------
// Fetch countries API (RestCountries)
// Returns: [{ name, code, flag }]
// ---------------------------------------------

export async function fetchCountries() {
  try {
    const res = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,cca2,flags'
    );

    if (!res.ok) throw new Error('Country API failed');

    const data = await res.json();

    const countries = data
      .map((c) => ({
        name: c.name?.common || 'Unknown',
        code: c.cca2 || '',
        flag: c.flags?.svg || c.flags?.png || '',
      }))
      .filter((c) => c.code) // ensure valid
      .sort((a, b) => a.name.localeCompare(b.name));

    return countries;
  } catch (err) {
    console.error('fetchCountries ERROR:', err);

    // fallback (must always return valid list for UI)
    return [
      {
        name: 'India',
        code: 'IN',
        flag: 'https://flagcdn.com/w320/in.png',
      },
      {
        name: 'United States',
        code: 'US',
        flag: 'https://flagcdn.com/w320/us.png',
      },
      {
        name: 'United Kingdom',
        code: 'GB',
        flag: 'https://flagcdn.com/w320/gb.png',
      },
    ];
  }
}
