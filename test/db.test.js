const fetchMock = require('jest-fetch-mock');
const {JSDOM} = require('jsdom');
const db = require('../src/db');

describe ('addUser tests', () => {
    beforeEach(async () => {
        fetchMock.resetMocks();
        const dom = new JSDOM('<html><body><div id="google_signin" class="testClass"></div></body></html>');
        global.document = dom.window.document;
    });

    it('should hide google signin element', async() => {
        fetchMock.mockResponseOnce(JSON.stringify({id:1, email:'test@email.com', first_name: 'firstName', last_name: 'lastName', full_name:'firstName lastName'}));
        await addUser({
            id:'1',
            email:'test@email.com',
            first_name: 'firstName', 
            last_name: 'lastName', 
            full_name:'firstName lastName'
        });

        //Assert
        await new Promise(process.nextTick);
        const element = document.getElementById('google_signin');
        expect(element.className).toBe('testClass');
        expect(element.style.display).toBe('none');
    });
})