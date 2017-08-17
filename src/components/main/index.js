import h from 'react-hyperscript'

import Nav from '../nav'
import Footer from '../footer'
import settings from 'settings'

import styles from './main.css'

const { primaryColor } = settings

const Main = props => {
  const { name } = props.route
  return h('.root', [
    h(Nav, {
      route: name,
      heading: 'Franklin Floresca',
      subHeading: 'Web Developer',
      backgroundColor: primaryColor
    }),
    h('div', { className: styles.root }, props.children),
    h(Footer, { backgroundColor: primaryColor })
  ])
}

export default Main
