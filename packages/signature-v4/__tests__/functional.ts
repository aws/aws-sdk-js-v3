const testDate = new Date('2000-01-01T00:00:00.000Z');
const globalDate = Date;

beforeEach(() => {
    (Date as any) = jest.fn(() => testDate);
    (Date.now as any) = jest.fn(() => testDate);
});

afterEach(() => {
    (Date as any) = globalDate;
});


