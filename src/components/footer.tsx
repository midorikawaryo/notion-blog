import ExtLink from './ext-link'

import Twitter from '../components/svgs/twitter'
import contactStyles from '../styles/contact.module.css'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/roy_roy_gr',
  },
]

export default () => (
  <>
    <footer>
      <div className="footer_nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li className={contactStyles.links}>
            {contacts.map(({ Comp, link, alt }) => {
              return (
                <ExtLink key={link} href={link} aria-label={alt}>
                  <Comp height={32} />
                </ExtLink>
              )
            })}
          </li>
        </ul>
      </div>
    </footer>
  </>
)
