# Currency: Zibs & Zinos; Ravnica currency

| value | Azorius               | Boros              | Orzhov
| -     | -                     | -                  | -
| 1cp   | Copper zib            | -                  | copper alms-coin
| 25 cp | silver 25-zib coin    | -                  | -
| 1 ep  | electrum 50-zib coin  | -                  | -
| 1 gp  | gold zino             | gold zino          | -
| 5 gp  | -                     | gold 5-zino coin   | -
| 1 pp  | -                     | -                  | platinum 10-zino coin
| 10 pp | -                     | -                  | platinum 100-zino coin

## Currency calculator

<script src="../js/currency.js"></script>
<div id="converter">
    <div id="convertToZib">
        <input type="text" id="cp" placeholder="cp"><br>
        <input type="text" id="sp" placeholder="sp"><br>
        <input type="text" id="ep" placeholder="ep"><br>
        <input type="text" id="gp" placeholder="gp"><br>
        <input type="text" id="pp" placeholder="pp"><br>
        <button onclick="convertToZib()">Convert to Zibs</button>
    </div>
    <div id="convertFromZib">
        <input type="text" id="zib" placeholder="zibs"><br>
        <input type="text" id="zino" placeholder="zinos"><br>
        <button onClick="convertFromZib()">Convert from Zibs</button>
    </div>
    <p id="result"></p>
</div>
