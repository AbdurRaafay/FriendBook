import { TestBed } from '@angular/core/testing';

import { WebsocketmessagingService } from './websocketmessaging.service';

describe('WebsocketmessagingService', () => {
  let service: WebsocketmessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketmessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
