import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';

const token = 'b5f6db3505581036bfe859c4e6abff';

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({ uri: 'https://graphql.datocms.com/' });

    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json'),
      });

      return forward(operation);
    });

    apollo.create({
      link: concat(authMiddleware, http),
      cache: new InMemoryCache(),
    });
  }
}
