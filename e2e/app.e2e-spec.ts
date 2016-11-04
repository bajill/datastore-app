import { DatastoreAppPage } from './app.po';

describe('datastore-app App', function() {
  let page: DatastoreAppPage;

  beforeEach(() => {
    page = new DatastoreAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
