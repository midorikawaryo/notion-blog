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
    <div className={contactStyles.links}>
      {contacts.map(({ Comp, link, alt }) => {
        return (
          <ExtLink key={link} href={link} aria-label={alt}>
            <Comp height={32} />
          </ExtLink>
        )
      })}
    </div>
  </>
)
