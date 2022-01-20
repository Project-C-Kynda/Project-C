import { TestBed } from '@angular/core/testing';

import { TemplateUploadService } from './template-upload.service';

describe('TemplateUploadService', () => {
  let service: TemplateUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateUploadService);
  });
});
