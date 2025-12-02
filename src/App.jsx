import React from 'react';

const App = () => {

  return (
      <section className="currency-converter">
        <div className="currency-div">
          <h1>Currency Converter</h1>
          <div>
            <label htmlFor="currency_amount">
            Amount:
            <input type="number" id="currency_amount" />
            </label>
          </div>

          <div className="currency-selector">
            <div>
              <label htmlFor="">
                From:
                <select name="" id="">
                  <option value="USD"></option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </section>
  );
};

export default App;
