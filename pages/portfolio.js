import React from 'react';
// import { withRouter } from 'next/router';

import BaseLayout from '../components/layouts/BaseLayout';
import Axios from 'axios';

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    try {
      const res = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { id, title, body } = this.props;
    return (
      <BaseLayout>
       <h1>Hello new method</h1>
        <h1>{`Title: ${title}`}</h1>
        <p>{`Body: ${body}`}</p>
        <p>{`ID: ${id}`}</p>
      </BaseLayout>
    );
  }
}

export default Portfolio
