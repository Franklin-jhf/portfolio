import h from 'react-hyperscript'

import TextBlock from 'layouts/textBlock'
import IconHeader from 'reusableComponents/iconHeader'
import { Face } from 'svg'
import settings from 'settings'

const { grey } = settings

const WhoAmI = () => {
  return h('.WhoAmI', [
    h(IconHeader, { icon: Face, size: 20, color: grey, text: 'Hello World' }),
    h(TextBlock, { background: true }, [
      h('p', [
        'Let me introduce myself, I am ',
        h('span.u-highlight', 'Franklin'),
        ', a full stack web developer.'
      ]),
      h('p', [
        `I grew up `,
        h('span.u-highlight', 'loving '),
        `math. I loved the logic of the equations and the problem solving aspects of it. Along with my predilection towards math, I found myself blissfully engulfed in the subjects of physics and the sciences.`
      ]),
      h('p', [
        'I had figured my ',
        h('span.u-highlight', 'calling '),
        'was in the field of engineering, so I enrolled for two years in the Electrical Engineering program at University of San Diego.'
      ]),
      h('p', [
        'After a bit of contemplation, I realized that I would be able to more fully express my ',
        h('span.u-highlight', 'creativity '),
        'through web development. I had always had an inclination towards coding anyway, so I took the leap to switch my major to ',
        h('span.u-highlight', 'Computer Science.')
      ]),
      h('p', [
        `In web and application development, there are `,
        h('span.u-highlight', 'a million and one ways '),
        `to solve a problem. It takes a `,
        h('span.u-highlight', 'fantastic '),
        `coder to choose the most elegant solution and, on top of that, deck it out with some snazzy CSS.`
      ]),
      h('p', [
        'As a ',
        h('span.u-highlight', 'lifelong learner'),
        ', I always strive to challenge myself and absorb as much knowledge as I can, whether it\'s through a good book, video, or just good conversation.'
      ]),
      h('p', [
        'Let\'s grab a ',
        h('span.u-highlight', 'coffee'),
        ' sometime.'
      ])
    ])
  ])
}

export default WhoAmI
