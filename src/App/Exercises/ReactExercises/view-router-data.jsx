import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { SwaggerRoute } from './Swagger/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { TodoListMetaData } from './TodoList/router-data';
import { ReactUseRefRoute } from './ReactUseRef/router-data';
import { form2MetaData } from './Form2/router-data';
import { ReduxTestMetaData } from './ReduxTest/router-data';
import { ReduxCounterMetaData } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  SwaggerRoute,
  ReactUseRefRoute,
  LocalDevAndFetchMetaData,
  TodoListMetaData,
  MaterialUIBasicElementsMetaData,
  form2MetaData,
  ReduxTestMetaData,
  ReduxCounterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
