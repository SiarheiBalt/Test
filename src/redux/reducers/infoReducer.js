import { ACTIONS } from "../constans";

const defaultState = [
  {
    title: "Lorem, ipsum dolor.",
    picture: "https://picsum.photos/200/300?random=1",
    article: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
  fugit eum earum in dicta mollitia autem, eveniet placeat ipsum, nam
  quia modi quis velit doloremque reprehenderit omnis aliquam cum
  voluptate atque ipsam quas. Ipsam dolor, tenetur eum minima assumenda
  possimus vero mollitia! Animi eius maxime deleniti optio rem beatae
  totam. Architecto est repudiandae, temporibus id rem mollitia, illum
  commodi reprehenderit nihil. `,
  },
  {
    title: "Lorem.",
    picture: "https://picsum.photos/200/300?random=2",
    article: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
  fugit eum earum in dicta mollitia autem, eveniet placeat ipsum, nam
  quia modi quis velit doloremque reprehenderit omnis aliquam cum
  voluptate atque ipsam quas. Ipsam dolor, tenetur eum minima assumenda
  possimus vero mollitia! Animi eius maxime deleniti optio rem beatae
  totam. Architecto est repudiandae, temporibus id rem mollitia, illum
  commodi reprehenderit nihil nobis et necessitatibus assumenda harum
  iusto blanditiis perspiciatis rerum debitis minus, modi magnam itaque
  doloribus nisi? `,
  },
  {
    title: "Ipsum.",
    picture: "https://picsum.photos/200/300?random=3",
    article: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
  fugit eum earum in dicta mollitia autem, eveniet placeat ipsum, nam
  quia modi quis velit doloremque reprehenderit omnis aliquam cum
  voluptate atque ipsam quas. Ipsam dolor, tenetur eum minima assumenda
  possimus vero mollitia! Animi eius maxime deleniti optio rem beatae
  totam. Architecto est repudiandae, temporibus id rem mollitia, illum
  commodi reprehenderit nihil nobis et necessitatibus assumenda harum
  iusto blanditiis perspiciatis rerum debitis minus, modi magnam itaque
  doloribus nisi? `,
  },
  {
    title: "Lorem, ipsum.",
    picture: "https://picsum.photos/200/300?random=4",
    article: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
  fugit eum earum in dicta mollitia autem, eveniet placeat ipsum, nam
  quia modi quis velit doloremque reprehenderit omnis aliquam cum
  voluptate atque ipsam quas. Ipsam dolor, tenetur eum minima assumenda
  possimus vero mollitia! Animi eius maxime deleniti optio rem beatae
  totam. Architecto est repudiandae, temporibus id rem mollitia, illum
  commodi reprehenderit nihil nobis et necessitatibus assumenda harum
  iusto blanditiis perspiciatis rerum debitis minus, modi magnam itaque
  doloribus nisi? `,
  },
];
export const infoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ARTICLES:
      return { ...state.infoReducer };

    default:
      return state;
  }
};
