var afri2008 = 1028;
var afri2009 = 1041.9;
var afri2010 = 1072.1;
var afri2011 = 1073.7;
var afri2012 = 1107.1;
var afri2013 = 1134.4;
var afri2014 = 1167.1;
var afri2015 = 1174.5;
var afri2016 = 1192.1;
var afri2017 = 1207;
var afri2018 = 1235.5;
var sa2008 = 1132.6;
var sa2009 = 1093.1;
var sa2010 = 1164.2;
var sa2011 = 1215.5;
var sa2012 = 1262;
var sa2013 = 1308.9;
var sa2014 = 1331.3;
var sa2015 = 1321.7;
var sa2016 = 1294.7;
var sa2017 = 1279.2;
var sa2018 = 1261.5;
var euro2008 = 4965.7;
var euro2009 = 4616.4;
var euro2010 = 4705.8;
var euro2011 = 4615.2;
var euro2012 = 4541.5;
var euro2013 = 4436.9;
var euro2014 = 4202;
var euro2015 = 4191.6;
var euro2016 = 4247.3;
var euro2017 = 4278.7;
var euro2018 = 4209.3;
var na2008 = 6600.4;
var na2009 = 6139.9;
var na2010 = 6375.8;
var na2011 = 6262.8;
var na2012 = 5998.9;
var na2013 = 6167;
var na2014 = 6268.9;
var na2015 = 6048.7;
var na2016 = 5938.3;
var na2017 = 5920.5;
var na2018 = 6035.6;
var asia2008 = 12954.7;
var asia2009 = 13246.6;
var asia2010 = 13986.8;
var asia2011 = 14860.1;
var asia2012 = 15308.8;
var asia2013 = 15660.2;
var asia2014 = 15787.7;
var asia2015 = 15877;
var asia2016 = 15984;
var asia2017 = 16274.3;
var asia2018 = 16274.1;
var aus2008 = 1993;
var aus2009 = 1875.7;
var aus2010 = 1939.1;
var aus2011 = 2035.2;
var aus2012 = 2063.2;
var aus2013 = 2014.7;
var aus2014 = 2027.6;
var aus2015 = 1986.8;
var aus2016 = 1997.4;
var aus2017 = 2001.3;
var aus2018 = 2100.5;
var afriges = afri2008 + afri2009 + afri2010 + afri2011 + afri2012 + afri2013 + afri2014 + afri2015 + afri2016 + afri2017 + afri2018;
var sages = sa2008 + sa2009 + sa2010 + sa2011 + sa2012 + sa2013 + sa2014 + sa2015 + sa2016 + sa2017 + sa2018;
var euroges = euro2008 + euro2009 + euro2010 + euro2011 + euro2012 + euro2013 + euro2014 + euro2015 + euro2016 + euro2017 + euro2018;
var nages = na2008 + na2009 + na2010 + na2011 + na2012 + na2013 + na2014 + na2015 + na2016 + na2017 + na2018;
var asiages = asia2008 + asia2009 + asia2010 + asia2011 + asia2012 + asia2013 + asia2014 + asia2015 + asia2016 + asia2017 + asia2018;
var ausges = aus2008 + aus2009 + aus2010 + aus2011 + aus2012 + aus2013 + aus2014 + aus2015 + aus2016 + aus2017 + aus2018;
var ges = afri2018 + sa2018 + euro2018 + na2018 + asia2018 + aus2018;
var afrigesrel = (afri2018 / ges) * 100;
var afriverabs = afri2018 - afri2008;
var afriverrel = (afriverabs / afri2008) * 100;
var sagesrel = (sa2018 / ges) * 100;
var saverabs = sa2018 - sa2008;
var saverrel = (saverabs / sa2008) * 100;
var eurogesrel = (euro2018 / ges) * 100;
var euroverabs = euro2018 - euro2008;
var euroverrel = (euroverabs / euro2008) * 100;
var nagesrel = (na2018 / ges) * 100;
var naverabs = na2018 - na2008;
var naverrel = (naverabs / na2008) * 100;
var asiagesrel = (asia2018 / ges) * 100;
var asiaverabs = asia2018 - asia2008;
var asiaverrel = (asiaverabs / asia2008) * 100;
var ausgesrel = (aus2018 / ges) * 100;
var ausverabs = aus2018 - aus2008;
var ausverrel = (ausverabs / aus2008) * 100;
function euro() {
    document.querySelector(".continenttitle").innerHTML = "Europe";
    document.querySelector(".continent").innerHTML = "Europe";
    document.querySelector(".emissionabs").innerHTML = "" + euro2018;
    document.querySelector(".emissionrel").innerHTML = "" + eurogesrel.toFixed(2) + " %";
    document.querySelector(".growthrel").innerHTML = "" + euroverrel.toFixed(2) + " %";
    document.querySelector(".growthabs").innerHTML = "" + euroverabs.toFixed(2);
    document.querySelector(".chart").setAttribute('style', 'height: 13.5%');
}
window.addEventListener('load', function () {
    document.querySelector(".europa").addEventListener('click', euro);
});
/* Hier verstehe ich nicht den Error, der in der Konsole angezeigt wird.
Mit Süd- und Nordamerika klappt alles und der Code ist gleich. An der Ladereihenfolge scheint es nicht
zu legen: Wenn ich den Skrip-Tag am Ende des Bodys platziere, taucht der selbe Error auf.*/
function na() {
    document.querySelector(".continenttitle").innerHTML = "North America";
    document.querySelector(".continent").innerHTML = "North America";
    document.querySelector(".emissionabs").innerHTML = "" + na2018;
    document.querySelector(".emissionrel").innerHTML = "" + nagesrel.toFixed(2) + " %";
    document.querySelector(".growthrel").innerHTML = "" + naverrel.toFixed(2) + " %";
    document.querySelector(".growthabs").innerHTML = "" + naverabs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height: 19.4%");
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener('click', na);
});
function sa() {
    document.querySelector(".continenttitle").innerHTML = "South America";
    document.querySelector(".continent").innerHTML = "South America";
    document.querySelector(".emissionabs").innerHTML = "" + sa2018;
    document.querySelector(".emissionrel").innerHTML = "" + sagesrel.toFixed(2) + " %";
    document.querySelector(".growthrel").innerHTML = "" + saverrel.toFixed(2) + " %";
    document.querySelector(".growthabs").innerHTML = "" + saverabs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height: 4.05%");
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener('click', sa);
});
function afri() {
    document.querySelector(".continenttitle").innerHTML = "Africa";
    document.querySelector(".continent").innerHTML = "Africa";
    document.querySelector(".emissionabs").innerHTML = "" + afri2018;
    document.querySelector(".emissionrel").innerHTML = "" + afrigesrel.toFixed(2) + " %";
    document.querySelector(".growthrel").innerHTML = "" + afriverrel.toFixed(2) + " %";
    document.querySelector(".growthabs").innerHTML = "" + afriverabs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height: 13.5%");
}
window.addEventListener('load', function () {
    document.querySelector(".europa").addEventListener('click', afri);
});
/* Hier verstehe ich nicht den Error, der in der Konsole angezeigt wird.
Mit Süd- und Nordamerika klappt alles und der Code ist gleich. An der Ladereihenfolge scheint es nicht
zu legen: Wenn ich den Skrip-Tag am Ende des Bodys platziere, taucht der selbe Error auf.*/
function asia() {
    document.querySelector(".continenttitle").innerHTML = "Asia";
    document.querySelector(".continent").innerHTML = "Asia";
    document.querySelector(".emissionabs").innerHTML = "" + asia2018;
    document.querySelector(".emissionrel").innerHTML = "" + asiagesrel.toFixed(2) + " %";
    document.querySelector(".growthrel").innerHTML = "" + asiaverrel.toFixed(2) + " %";
    document.querySelector(".growthabs").innerHTML = "" + asiaverabs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height: 13.5%");
}
window.addEventListener('load', function () {
    document.querySelector(".europa").addEventListener('click', asia);
});
/* Hier verstehe ich nicht den Error, der in der Konsole angezeigt wird.
Mit Süd- und Nordamerika klappt alles und der Code ist gleich. An der Ladereihenfolge scheint es nicht
zu legen: Wenn ich den Skrip-Tag am Ende des Bodys platziere, taucht der selbe Error auf.*/
function aus() {
    document.querySelector(".continenttitle").innerHTML = "Australia";
    document.querySelector(".continent").innerHTML = "Australia";
    document.querySelector(".emissionabs").innerHTML = "" + aus2018;
    document.querySelector(".emissionrel").innerHTML = "" + ausgesrel.toFixed(2) + " %";
    document.querySelector(".growthrel").innerHTML = "" + ausverrel.toFixed(2) + " %";
    document.querySelector(".growthabs").innerHTML = "" + ausverabs.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height: 13.5%");
}
window.addEventListener('load', function () {
    document.querySelector(".europa").addEventListener('click', aus);
});
/* Hier verstehe ich nicht den Error, der in der Konsole angezeigt wird.
Mit Süd- und Nordamerika klappt alles und der Code ist gleich. An der Ladereihenfolge scheint es nicht
zu legen: Wenn ich den Skrip-Tag am Ende des Bodys platziere, taucht der selbe Error auf.*/
//# sourceMappingURL=skript.js.map