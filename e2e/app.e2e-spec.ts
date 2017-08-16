import { PomodoroAppPage } from './app.po';

describe('pomodoro-app App', () => {
  let page: PomodoroAppPage;

  beforeEach(() => {
    page = new PomodoroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
