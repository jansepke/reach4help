import { TimelineItem } from 'src/models/requests/timeline';
import createActionTypeFactory from 'src/store/utils/createActionTypeFactory';

export const { asyncType, observerType, syncType } = createActionTypeFactory(
  'TIMELINES',
);

export const GET_TIMELINES_FOR_POST = observerType('GET_TIMELINES_FOR_POST');
export const RESET_TIMELINES_FOR_POST = observerType('RESET_TIMELINES_FOR_POST');

export interface TimelineState {
  observerReceivedFirstUpdate: boolean;
  loading: boolean;
  data?: TimelineItem[];
  error?: Error;
}

