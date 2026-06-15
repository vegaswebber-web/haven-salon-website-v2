import './Products.css'

const products = [
  {
    category: 'Haar',
    items: [
      { name: 'Pomade',        brand: 'American Crew',  price: '€ 14,95' },
      { name: 'Matt Clay',     brand: 'American Crew',  price: '€ 15,95' },
      { name: 'Haar Wax',      brand: 'Layrite',        price: '€ 13,95' },
    ],
  },
  {
    category: 'Baard',
    items: [
      { name: 'Baard Olie',    brand: 'Proraso',        price: '€ 12,95' },
      { name: 'Baard Balsem',  brand: 'Proraso',        price: '€ 11,95' },
      { name: 'Scheercrème',   brand: 'Proraso',        price: '€ 9,95'  },
    ],
  },
  {
    category: 'Verzorging',
    items: [
      { name: 'Face Wash',     brand: 'Bulldog',        price: '€ 8,95'  },
      { name: 'Aftershave',    brand: 'Proraso',        price: '€ 10,95' },
      { name: 'Moisturizer',   brand: 'Bulldog',        price: '€ 9,95'  },
    ],
  },
]

export default function Products() {
  return (
    <section id="producten" className="products">
      <div className="container">
        <div className="products-header">
          <span className="section-label">Winkel</span>
          <h2 className="section-title">Producten</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Professionele producten die wij ook in de salon gebruiken — nu ook te koop.
          </p>
        </div>

        <div className="products-grid">
          {products.map(cat => (
            <div key={cat.category} className="products-category">
              <h3 className="products-cat-title">{cat.category}</h3>
              <ul className="products-list">
                {cat.items.map(item => (
                  <li key={item.name} className="product-row">
                    <div className="product-img-placeholder">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                      </svg>
                    </div>
                    <div className="product-info">
                      <span className="product-name">{item.name}</span>
                      <span className="product-brand">{item.brand}</span>
                    </div>
                    <span className="product-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="products-note">
          * Producten zijn verkrijgbaar in de salon. Prijzen kunnen wijzigen.
        </p>
      </div>
    </section>
  )
}
