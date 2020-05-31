width = window.innerWidth;
height = window.innerHeight;

describe('Test Growth Chart with jasmine ', function() {
  var c;
  var data;
  var p3 = [];
  var p5 = [];
  var p10 = [];
  var p25 = [];
  var p50 = [];
  var p75 = [];
  var p90 = [];
  var p95 = [];
  var p97 = [];

  beforeEach(function() {
    var c = new growthChart();
    
  });

  // afterEach(function() {
  //   d3.selectAll('svg').remove();
  // });

  describe('Checking SVG' ,function() {

    var c = new growthChart();
    c.render();

    it('should be created', function() {
        expect(getSvg()).not.toBeNull();
    });

    it('should have the correct width', function() {
      expect(parseInt(getSvg().attr('width'))).toBe(width);
    });

    it('should have the correct height', function() {
      expect(parseInt(getSvg().attr('height'))).toBe(height);
    });
  });

  describe('Checking Line data' ,function() {
    it('Append and check Percentile values', function() {
    var data = [{"Sex":"1","Agemos":"0","L":"1.815151075","M":"3.530203168","S":"0.152385273","P3":"2.355450986","P5":"2.52690402","P10":"2.773801848","P25":"3.150611082","P50":"3.530203168","P75":"3.879076559","P90":"4.17249339","P95":"4.34029274","P97":"4.446488308"},{"Sex":"1","Agemos":"0.5","L":"1.547523128","M":"4.003106424","S":"0.146025021","P3":"2.799548641","P5":"2.964655655","P10":"3.209510017","P25":"3.597395573","P50":"4.003106424","P75":"4.387422565","P90":"4.718161283","P95":"4.910130108","P97":"5.032624982"},{"Sex":"1","Agemos":"1.5","L":"1.068795548","M":"4.879525083","S":"0.136478767","P3":"3.614688072","P5":"3.774848862","P10":"4.020561446","P25":"4.428872952","P50":"4.879525083","P75":"5.327327567","P90":"5.728152752","P95":"5.967101615","P97":"6.121929103"},{"Sex":"1","Agemos":"2.5","L":"0.695973505","M":"5.672888765","S":"0.129677511","P3":"4.34234145","P5":"4.503255345","P10":"4.754479354","P25":"5.183377547","P50":"5.672888765","P75":"6.175598158","P90":"6.638979132","P95":"6.921119162","P97":"7.106250132"},{"Sex":"1","Agemos":"3.5","L":"0.41981509","M":"6.391391982","S":"0.124717085","P3":"4.992897896","P5":"5.157411653","P10":"5.416802856","P25":"5.866806254","P50":"6.391391982","P75":"6.942217106","P90":"7.460702368","P95":"7.781401145","P97":"7.993878049"},{"Sex":"1","Agemos":"4.5","L":"0.219866801","M":"7.041836432","S":"0.121040119","P3":"5.575169066","P5":"5.744751566","P10":"6.01371624","P25":"6.484969167","P50":"7.041836432","P75":"7.635323002","P90":"8.202193202","P95":"8.556813353","P97":"8.793443663"},{"Sex":"1","Agemos":"5.5","L":"0.077505598","M":"7.630425182","S":"0.1182712","P3":"6.096775274","P5":"6.272175299","P10":"6.551379244","P25":"7.043626918","P50":"7.630425182","P75":"8.262032991","P90":"8.871384112","P95":"9.255614546","P97":"9.51330656"},{"Sex":"1","Agemos":"6.5","L":"-0.02190761","M":"8.162951035","S":"0.116153695","P3":"6.564430346","P5":"6.745992665","P10":"7.035656404","P25":"7.548345716","P50":"8.162951035","P75":"8.828786159","P90":"9.47546616","P95":"9.885435743","P97":"10.16135019"},{"Sex":"1","Agemos":"7.5","L":"-0.0894409","M":"8.644832479","S":"0.114510349","P3":"6.984123338","P5":"7.171952393","P10":"7.472021438","P25":"8.004398775","P50":"8.644832479","P75":"9.34149038","P90":"10.02101374","P95":"10.45331433","P97":"10.74492376"},{"Sex":"1","Agemos":"8.5","L":"-0.1334091","M":"9.081119817","S":"0.113217163","P3":"7.361236116","P5":"7.555286752","P10":"7.865532922","P25":"8.416718775","P50":"9.081119817","P75":"9.805593364","P90":"10.51406421","P95":"10.96573632","P97":"11.27083843"},{"Sex":"1","Agemos":"9.5","L":"-0.1600954","M":"9.476500305","S":"0.11218624","P3":"7.700624405","P5":"7.90075516","P10":"8.220839211","P25":"8.789881892","P50":"9.476500305","P75":"10.22612395","P90":"10.96017225","P95":"11.42867623","P97":"11.74538465"},{"Sex":"1","Agemos":"10.5","L":"-0.17429685","M":"9.835307701","S":"0.111354536","P3":"8.006677447","P5":"8.212683538","P10":"8.542195484","P25":"9.128109523","P50":"9.835307701","P75":"10.60772151","P90":"11.36445045","P95":"11.84763282","P97":"12.17435729"},{"Sex":"1","Agemos":"11.5","L":"-0.1797189","M":"10.16153567","S":"0.110676413","P3":"8.283364855","P5":"8.494999555","P10":"8.833485623","P25":"9.43527941","P50":"10.16153567","P75":"10.9546603","P90":"11.73160184","P95":"12.2276612","P97":"12.56308347"},{"Sex":"1","Agemos":"12.5","L":"-0.179254","M":"10.45885399","S":"0.110118635","P3":"8.534275028","P5":"8.751264252","P10":"9.098245709","P25":"9.714941801","P50":"10.45885399","P75":"11.27087147","P90":"12.06594792","P95":"12.57340193","P97":"12.91645043"},{"Sex":"1","Agemos":"13.5","L":"-0.17518447","M":"10.7306256","S":"0.109656941","P3":"8.762648582","P5":"8.984701111","P10":"9.339687673","P25":"9.970337596","P50":"10.7306256","P75":"11.55996332","P90":"12.37145331","P95":"12.88910809","P97":"13.23893338"},{"Sex":"1","Agemos":"14.5","L":"-0.16932268","M":"10.97992482","S":"0.109273653","P3":"8.971407287","P5":"9.198222429","P10":"9.560722369","P25":"10.20441778","P50":"10.97992482","P75":"11.82524099","P90":"12.65174864","P95":"13.17867019","P97":"13.53462171"},{"Sex":"1","Agemos":"15.5","L":"-0.1631139","M":"11.20955529","S":"0.10895596","P3":"9.163180317","P5":"9.394453831","P10":"9.763981751","P25":"10.41986276","P50":"11.20955529","P75":"12.06972515","P90":"12.91015164","P95":"13.44563963","P97":"13.80724431"},{"Sex":"1","Agemos":"16.5","L":"-0.15770999","M":"11.4220677","S":"0.108694678","P3":"9.340328068","P5":"9.575756968","P10":"9.951839998","P25":"10.61910138","P50":"11.4220677","P75":"12.29616991","P90":"13.14968707","P95":"13.6932508","P97":"14.0601935"},{"Sex":"1","Agemos":"17.5","L":"-0.15402279","M":"11.61977698","S":"0.108483324","P3":"9.504964014","P5":"9.744250626","P10":"10.12643352","P25":"10.80432929","P50":"11.61977698","P75":"12.50708008","P90":"13.37310558","P95":"13.92444193","P97":"14.29654774"},{"Sex":"1","Agemos":"18.5","L":"-0.15276214","M":"11.80477902","S":"0.108317416","P3":"9.658974787","P5":"9.901830339","P10":"10.28967982","P25":"10.97752662","P50":"11.80477902","P75":"12.70472779","P90":"13.58290165","P95":"14.14187481","P97":"14.51909298"},{"Sex":"1","Agemos":"19.5","L":"-0.15446658","M":"11.9789663","S":"0.108193944","P3":"9.804039109","P5":"10.05018686","P10":"10.44329524","P25":"11.14047457","P50":"11.9789663","P75":"12.89116805","P90":"13.78133058","P95":"14.34795358","P97":"14.73034312"},{"Sex":"1","Agemos":"20.5","L":"-0.15952202","M":"12.14404334","S":"0.108110954","P3":"9.941644878","P5":"10.19082308","P10":"10.58881155","P25":"11.2947714","P50":"12.14404334","P75":"13.06825426","P90":"13.9704249","P95":"14.54484233","P97":"14.93255878"},{"Sex":"1","Agemos":"21.5","L":"-0.16817926","M":"12.30154103","S":"0.108067236","P3":"10.07310549","P5":"10.32507004","P10":"10.72759156","P25":"11.44184727","P50":"12.30154103","P75":"13.23765258","P90":"14.15200982","P95":"14.73448194","P97":"15.12776542"},{"Sex":"1","Agemos":"22.5","L":"-0.1805668","M":"12.45283028","S":"0.108062078","P3":"10.19957488","P5":"10.45410181","P10":"10.86084353","P25":"11.58297823","P50":"12.45283028","P75":"13.40085582","P90":"14.3277181","P95":"14.91860604","P97":"15.31777023"},{"Sex":"1","Agemos":"23.5","L":"-0.19670196","M":"12.59913494","S":"0.108095077","P3":"10.32206165","P5":"10.57894925","P10":"10.98963476","P25":"11.7192993","P50":"12.59913494","P75":"13.55919667","P90":"14.49900418","P95":"15.09875606","P97":"15.50417803"},{"Sex":"1","Agemos":"24.5","L":"-0.21650121","M":"12.74154396","S":"0.108166005","P3":"10.4414422","P5":"10.70051298","P10":"11.11490406","P25":"11.85181666","P50":"12.74154396","P75":"13.71386029","P90":"14.6671577","P95":"15.27629562","P97":"15.68840631"},{"Sex":"1","Agemos":"25.5","L":"-0.23979048","M":"12.88102276","S":"0.108274705","P3":"10.55847309","P5":"10.81957536","P10":"11.23747341","P25":"11.98141892","P50":"12.88102276","P75":"13.86589625","P90":"14.83331632","P95":"15.45242405","P97":"15.87169941"},{"Sex":"1","Agemos":"26.5","L":"-0.26631585","M":"13.01842382","S":"0.108421024","P3":"10.67380261","P5":"10.93681171","P10":"11.35805876","P25":"12.10888759","P50":"13.01842382","P75":"14.0162298","P90":"14.99847794","P95":"15.62818936","P97":"16.05514188"},{"Sex":"1","Agemos":"27.5","L":"-0.29575496","M":"13.1544966","S":"0.108604769","P3":"10.78798156","P5":"11.05280067","P10":"11.47727994","P25":"12.23490671","P50":"13.1544966","P75":"14.1656725","P90":"15.16351231","P95":"15.80450043","P97":"16.23967114"},{"Sex":"1","Agemos":"28.5","L":"-0.32772936","M":"13.28989667","S":"0.108825681","P3":"10.90147346","P5":"11.168034","P10":"11.59566994","P25":"12.36007175","P50":"13.28989667","P75":"14.31493214","P90":"15.32917196","P95":"15.98213866","P97":"16.42608957"},{"Sex":"1","Agemos":"29.5","L":"-0.36181746","M":"13.42519408","S":"0.109083423","P3":"11.01466395","P5":"11.28292555","P10":"11.7136834","P25":"12.48489772","P50":"13.42519408","P75":"14.46462206","P90":"15.49610261","P95":"16.16176896","P97":"16.61507584"},{"Sex":"1","Agemos":"30.5","L":"-0.39756808","M":"13.56088113","S":"0.109377581","P3":"11.12786972","P5":"11.3978197","P10":"11.8317045","P25":"12.60982671","P50":"13.56088113","P75":"14.61526973","P90":"15.66485286","P95":"16.34395024","P97":"16.80719582"},{"Sex":"1","Agemos":"31.5","L":"-0.43452025","M":"13.69737858","S":"0.109707646","P3":"11.24134752","P5":"11.51299966","P10":"11.95005435","P25":"12.73523417","P50":"13.69737858","P75":"14.76732387","P90":"15.83588308","P95":"16.52914562","P97":"17.00291386"},{"Sex":"1","Agemos":"32.5","L":"-0.47218875","M":"13.83504622","S":"0.110073084","P3":"11.3552982","P5":"11.62869248","P10":"12.06899744","P25":"12.86143776","P50":"13.83504622","P75":"14.9211657","P90":"16.00957526","P95":"16.71773017","P97":"17.2025984"},{"Sex":"1","Agemos":"33.5","L":"-0.51012309","M":"13.97418199","S":"0.110473238","P3":"11.46987977","P5":"11.74507947","P10":"12.18874835","P25":"12.98869905","P50":"13.97418199","P75":"15.07710916","P90":"16.18623873","P95":"16.91000241","P97":"17.40653835"},{"Sex":"1","Agemos":"34.5","L":"-0.54788557","M":"14.1150324","S":"0.1109074","P3":"11.58520959","P5":"11.86229971","P10":"12.30947723","P25":"13.11723187","P50":"14.1150324","P75":"15.23541179","P90":"16.36611917","P95":"17.10619066","P97":"17.61494698"},{"Sex":"1","Agemos":"35.5","L":"-0.5850701","M":"14.25779618","S":"0.111374787","P3":"11.70137143","P5":"11.98045644","P10":"12.43131521","P25":"13.24720657","P50":"14.25779618","P75":"15.3962791","P90":"16.54940494","P95":"17.30646132","P97":"17.8279717"},{"Sex":"1","Agemos":"36","L":"-0.60333785","M":"14.32994444","S":"0.111620652","P3":"11.75978387","P5":"12.03991048","P10":"12.49268178","P25":"13.31277633","P50":"14.32994444","P75":"15.47772447","P90":"16.6423691","P95":"17.40816491","P97":"17.93624653"}];
      
      var values = [];
      lb = 2.204622621;
        for(var i=0; i<=37; i +=1)
        {
            p3.push({month: data[i].Agemos, value: data[i].P3 * lb});
            p5.push({month: data[i].Agemos, value: data[i].P5 * lb});
            p10.push({month: data[i].Agemos, value: data[i].P10 * lb});
            p25.push({month: data[i].Agemos, value: data[i].P25 * lb});
            p50.push({month: data[i].Agemos, value: data[i].P50 * lb});
            p75.push({month: data[i].Agemos, value: data[i].P75 * lb});
            p90.push({month: data[i].Agemos, value: data[i].P90 * lb});
            p95.push({month: data[i].Agemos, value: data[i].P95 * lb});
            p97.push({month: data[i].Agemos, value: data[i].P97 * lb});
        }
        values.push(p3);
        values.push(p5);
        values.push(p10);
        values.push(p25);
        values.push(p50);
        values.push(p75);
        values.push(p90);
        values.push(p95);
        values.push(p97);
     
        var c = new growthChart();
        var result = c.genLineData();
        expect(result).toEqual(values);

    });
  });

  describe('Checking Axis data' ,function() {
  it('Append and Check Axis Values', function() {
    var data = [];
    var xAxisValues = [];
      for (var i = 0; i <= 38; i += 0.5) {
        xAxisValues.push( { value: i, isVisible: i % 3 === 0, isSmall: i % 0.5 === 0 });
        }
    var yAxisValues = [];
      for (var i = 0; i <= 42; i += 0.5) {
        yAxisValues.push( { value: i, isVisible: i % 2 === 0 });
       }
    var yAxisAValues = [];
      for (var i = 0; i <= 18; i += 1){
        yAxisAValues.push( { value: i, isVisible: true });
          for (var j = 0.2; j <= 0.8; j += 0.2){          
            yAxisAValues.push( { value: i+j, isVisible: false });          
          }            
      }
      yAxisAValues.push( { value: (i-1)+j, isVisible: false });
    
      data.push(xAxisValues);
      data.push(yAxisValues);
      data.push(yAxisAValues);

      var c = new growthChart();
     
      expect(c.getAxisData()).toEqual(data);
  });
  });

  describe('Checking Axis' ,function() {
    it('Check X axis tick values property', function() {      
      var text = " function(_) {        return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();      }"
      text = text.replace(/\s/g, "");
      var c = new growthChart();
      c.render();
      c.getAxisData();
      a=c.drawXaxis();
      expect(a.toString().replace(/\s/g, "")).toBe(text);
    });
    it('Check Y Left-A axis tick values property', function() {      
      var text = " function(_) {        return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();      }"
      text = text.replace(/\s/g, "");
      var c = new growthChart();
      c.render();
      c.getAxisData();
      a=c.drawYaxisLeftA();
      expect(a.toString().replace(/\s/g, "")).toBe(text);
    });
    it('Check Y Left axis tick values property', function() {      
      var text = " function(_) {        return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();      }"
      text = text.replace(/\s/g, "");
      var c = new growthChart();
      c.render();
      c.getAxisData();
      a=c.drawYaxisLeft();
      expect(a.toString().replace(/\s/g, "")).toBe(text);
    });
    it('Check Y Right axis tick values property', function() {      
      var text = " function(_) {        return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();      }"
      text = text.replace(/\s/g, "");
      var c = new growthChart();
      c.render();
      c.getAxisData();
      a=c.drawYaxisRight();
      expect(a.toString().replace(/\s/g, "")).toBe(text);
    });
  });

  describe('Checking Percentile Lines' ,function() {
    it('Check Line Curve Property', function() {
      var text = "function(_) {        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;      }"
      text = text.replace(/\s/g, "");
      var c = new growthChart();
      c.render();
      a=c.drawLine(p3,"black",1);
      expect(a[0].toString().replace(/\s/g, "")).toBe(text);
    });
    it('Check Line Datum Property', function() {
      var text = "function selection_datum(value) { return arguments.length   ? this.property(\"__data__\", value)    : this.node().__data__;      }"
      text = text.replace(/\s/g, "");
      var c = new growthChart();
      c.render();
      a=c.drawLine(p3,"black",1);
      expect(a[1].toString().replace(/\s/g, "")).toBe(text);
    });
  });

  describe('Checking Lables' ,function() {
    var data = [{"Sex":"1","Agemos":"0","L":"1.815151075","M":"3.530203168","S":"0.152385273","P3":"2.355450986","P5":"2.52690402","P10":"2.773801848","P25":"3.150611082","P50":"3.530203168","P75":"3.879076559","P90":"4.17249339","P95":"4.34029274","P97":"4.446488308"},{"Sex":"1","Agemos":"0.5","L":"1.547523128","M":"4.003106424","S":"0.146025021","P3":"2.799548641","P5":"2.964655655","P10":"3.209510017","P25":"3.597395573","P50":"4.003106424","P75":"4.387422565","P90":"4.718161283","P95":"4.910130108","P97":"5.032624982"},{"Sex":"1","Agemos":"1.5","L":"1.068795548","M":"4.879525083","S":"0.136478767","P3":"3.614688072","P5":"3.774848862","P10":"4.020561446","P25":"4.428872952","P50":"4.879525083","P75":"5.327327567","P90":"5.728152752","P95":"5.967101615","P97":"6.121929103"},{"Sex":"1","Agemos":"2.5","L":"0.695973505","M":"5.672888765","S":"0.129677511","P3":"4.34234145","P5":"4.503255345","P10":"4.754479354","P25":"5.183377547","P50":"5.672888765","P75":"6.175598158","P90":"6.638979132","P95":"6.921119162","P97":"7.106250132"},{"Sex":"1","Agemos":"3.5","L":"0.41981509","M":"6.391391982","S":"0.124717085","P3":"4.992897896","P5":"5.157411653","P10":"5.416802856","P25":"5.866806254","P50":"6.391391982","P75":"6.942217106","P90":"7.460702368","P95":"7.781401145","P97":"7.993878049"},{"Sex":"1","Agemos":"4.5","L":"0.219866801","M":"7.041836432","S":"0.121040119","P3":"5.575169066","P5":"5.744751566","P10":"6.01371624","P25":"6.484969167","P50":"7.041836432","P75":"7.635323002","P90":"8.202193202","P95":"8.556813353","P97":"8.793443663"},{"Sex":"1","Agemos":"5.5","L":"0.077505598","M":"7.630425182","S":"0.1182712","P3":"6.096775274","P5":"6.272175299","P10":"6.551379244","P25":"7.043626918","P50":"7.630425182","P75":"8.262032991","P90":"8.871384112","P95":"9.255614546","P97":"9.51330656"},{"Sex":"1","Agemos":"6.5","L":"-0.02190761","M":"8.162951035","S":"0.116153695","P3":"6.564430346","P5":"6.745992665","P10":"7.035656404","P25":"7.548345716","P50":"8.162951035","P75":"8.828786159","P90":"9.47546616","P95":"9.885435743","P97":"10.16135019"},{"Sex":"1","Agemos":"7.5","L":"-0.0894409","M":"8.644832479","S":"0.114510349","P3":"6.984123338","P5":"7.171952393","P10":"7.472021438","P25":"8.004398775","P50":"8.644832479","P75":"9.34149038","P90":"10.02101374","P95":"10.45331433","P97":"10.74492376"},{"Sex":"1","Agemos":"8.5","L":"-0.1334091","M":"9.081119817","S":"0.113217163","P3":"7.361236116","P5":"7.555286752","P10":"7.865532922","P25":"8.416718775","P50":"9.081119817","P75":"9.805593364","P90":"10.51406421","P95":"10.96573632","P97":"11.27083843"},{"Sex":"1","Agemos":"9.5","L":"-0.1600954","M":"9.476500305","S":"0.11218624","P3":"7.700624405","P5":"7.90075516","P10":"8.220839211","P25":"8.789881892","P50":"9.476500305","P75":"10.22612395","P90":"10.96017225","P95":"11.42867623","P97":"11.74538465"},{"Sex":"1","Agemos":"10.5","L":"-0.17429685","M":"9.835307701","S":"0.111354536","P3":"8.006677447","P5":"8.212683538","P10":"8.542195484","P25":"9.128109523","P50":"9.835307701","P75":"10.60772151","P90":"11.36445045","P95":"11.84763282","P97":"12.17435729"},{"Sex":"1","Agemos":"11.5","L":"-0.1797189","M":"10.16153567","S":"0.110676413","P3":"8.283364855","P5":"8.494999555","P10":"8.833485623","P25":"9.43527941","P50":"10.16153567","P75":"10.9546603","P90":"11.73160184","P95":"12.2276612","P97":"12.56308347"},{"Sex":"1","Agemos":"12.5","L":"-0.179254","M":"10.45885399","S":"0.110118635","P3":"8.534275028","P5":"8.751264252","P10":"9.098245709","P25":"9.714941801","P50":"10.45885399","P75":"11.27087147","P90":"12.06594792","P95":"12.57340193","P97":"12.91645043"},{"Sex":"1","Agemos":"13.5","L":"-0.17518447","M":"10.7306256","S":"0.109656941","P3":"8.762648582","P5":"8.984701111","P10":"9.339687673","P25":"9.970337596","P50":"10.7306256","P75":"11.55996332","P90":"12.37145331","P95":"12.88910809","P97":"13.23893338"},{"Sex":"1","Agemos":"14.5","L":"-0.16932268","M":"10.97992482","S":"0.109273653","P3":"8.971407287","P5":"9.198222429","P10":"9.560722369","P25":"10.20441778","P50":"10.97992482","P75":"11.82524099","P90":"12.65174864","P95":"13.17867019","P97":"13.53462171"},{"Sex":"1","Agemos":"15.5","L":"-0.1631139","M":"11.20955529","S":"0.10895596","P3":"9.163180317","P5":"9.394453831","P10":"9.763981751","P25":"10.41986276","P50":"11.20955529","P75":"12.06972515","P90":"12.91015164","P95":"13.44563963","P97":"13.80724431"},{"Sex":"1","Agemos":"16.5","L":"-0.15770999","M":"11.4220677","S":"0.108694678","P3":"9.340328068","P5":"9.575756968","P10":"9.951839998","P25":"10.61910138","P50":"11.4220677","P75":"12.29616991","P90":"13.14968707","P95":"13.6932508","P97":"14.0601935"},{"Sex":"1","Agemos":"17.5","L":"-0.15402279","M":"11.61977698","S":"0.108483324","P3":"9.504964014","P5":"9.744250626","P10":"10.12643352","P25":"10.80432929","P50":"11.61977698","P75":"12.50708008","P90":"13.37310558","P95":"13.92444193","P97":"14.29654774"},{"Sex":"1","Agemos":"18.5","L":"-0.15276214","M":"11.80477902","S":"0.108317416","P3":"9.658974787","P5":"9.901830339","P10":"10.28967982","P25":"10.97752662","P50":"11.80477902","P75":"12.70472779","P90":"13.58290165","P95":"14.14187481","P97":"14.51909298"},{"Sex":"1","Agemos":"19.5","L":"-0.15446658","M":"11.9789663","S":"0.108193944","P3":"9.804039109","P5":"10.05018686","P10":"10.44329524","P25":"11.14047457","P50":"11.9789663","P75":"12.89116805","P90":"13.78133058","P95":"14.34795358","P97":"14.73034312"},{"Sex":"1","Agemos":"20.5","L":"-0.15952202","M":"12.14404334","S":"0.108110954","P3":"9.941644878","P5":"10.19082308","P10":"10.58881155","P25":"11.2947714","P50":"12.14404334","P75":"13.06825426","P90":"13.9704249","P95":"14.54484233","P97":"14.93255878"},{"Sex":"1","Agemos":"21.5","L":"-0.16817926","M":"12.30154103","S":"0.108067236","P3":"10.07310549","P5":"10.32507004","P10":"10.72759156","P25":"11.44184727","P50":"12.30154103","P75":"13.23765258","P90":"14.15200982","P95":"14.73448194","P97":"15.12776542"},{"Sex":"1","Agemos":"22.5","L":"-0.1805668","M":"12.45283028","S":"0.108062078","P3":"10.19957488","P5":"10.45410181","P10":"10.86084353","P25":"11.58297823","P50":"12.45283028","P75":"13.40085582","P90":"14.3277181","P95":"14.91860604","P97":"15.31777023"},{"Sex":"1","Agemos":"23.5","L":"-0.19670196","M":"12.59913494","S":"0.108095077","P3":"10.32206165","P5":"10.57894925","P10":"10.98963476","P25":"11.7192993","P50":"12.59913494","P75":"13.55919667","P90":"14.49900418","P95":"15.09875606","P97":"15.50417803"},{"Sex":"1","Agemos":"24.5","L":"-0.21650121","M":"12.74154396","S":"0.108166005","P3":"10.4414422","P5":"10.70051298","P10":"11.11490406","P25":"11.85181666","P50":"12.74154396","P75":"13.71386029","P90":"14.6671577","P95":"15.27629562","P97":"15.68840631"},{"Sex":"1","Agemos":"25.5","L":"-0.23979048","M":"12.88102276","S":"0.108274705","P3":"10.55847309","P5":"10.81957536","P10":"11.23747341","P25":"11.98141892","P50":"12.88102276","P75":"13.86589625","P90":"14.83331632","P95":"15.45242405","P97":"15.87169941"},{"Sex":"1","Agemos":"26.5","L":"-0.26631585","M":"13.01842382","S":"0.108421024","P3":"10.67380261","P5":"10.93681171","P10":"11.35805876","P25":"12.10888759","P50":"13.01842382","P75":"14.0162298","P90":"14.99847794","P95":"15.62818936","P97":"16.05514188"},{"Sex":"1","Agemos":"27.5","L":"-0.29575496","M":"13.1544966","S":"0.108604769","P3":"10.78798156","P5":"11.05280067","P10":"11.47727994","P25":"12.23490671","P50":"13.1544966","P75":"14.1656725","P90":"15.16351231","P95":"15.80450043","P97":"16.23967114"},{"Sex":"1","Agemos":"28.5","L":"-0.32772936","M":"13.28989667","S":"0.108825681","P3":"10.90147346","P5":"11.168034","P10":"11.59566994","P25":"12.36007175","P50":"13.28989667","P75":"14.31493214","P90":"15.32917196","P95":"15.98213866","P97":"16.42608957"},{"Sex":"1","Agemos":"29.5","L":"-0.36181746","M":"13.42519408","S":"0.109083423","P3":"11.01466395","P5":"11.28292555","P10":"11.7136834","P25":"12.48489772","P50":"13.42519408","P75":"14.46462206","P90":"15.49610261","P95":"16.16176896","P97":"16.61507584"},{"Sex":"1","Agemos":"30.5","L":"-0.39756808","M":"13.56088113","S":"0.109377581","P3":"11.12786972","P5":"11.3978197","P10":"11.8317045","P25":"12.60982671","P50":"13.56088113","P75":"14.61526973","P90":"15.66485286","P95":"16.34395024","P97":"16.80719582"},{"Sex":"1","Agemos":"31.5","L":"-0.43452025","M":"13.69737858","S":"0.109707646","P3":"11.24134752","P5":"11.51299966","P10":"11.95005435","P25":"12.73523417","P50":"13.69737858","P75":"14.76732387","P90":"15.83588308","P95":"16.52914562","P97":"17.00291386"},{"Sex":"1","Agemos":"32.5","L":"-0.47218875","M":"13.83504622","S":"0.110073084","P3":"11.3552982","P5":"11.62869248","P10":"12.06899744","P25":"12.86143776","P50":"13.83504622","P75":"14.9211657","P90":"16.00957526","P95":"16.71773017","P97":"17.2025984"},{"Sex":"1","Agemos":"33.5","L":"-0.51012309","M":"13.97418199","S":"0.110473238","P3":"11.46987977","P5":"11.74507947","P10":"12.18874835","P25":"12.98869905","P50":"13.97418199","P75":"15.07710916","P90":"16.18623873","P95":"16.91000241","P97":"17.40653835"},{"Sex":"1","Agemos":"34.5","L":"-0.54788557","M":"14.1150324","S":"0.1109074","P3":"11.58520959","P5":"11.86229971","P10":"12.30947723","P25":"13.11723187","P50":"14.1150324","P75":"15.23541179","P90":"16.36611917","P95":"17.10619066","P97":"17.61494698"},{"Sex":"1","Agemos":"35.5","L":"-0.5850701","M":"14.25779618","S":"0.111374787","P3":"11.70137143","P5":"11.98045644","P10":"12.43131521","P25":"13.24720657","P50":"14.25779618","P75":"15.3962791","P90":"16.54940494","P95":"17.30646132","P97":"17.8279717"},{"Sex":"1","Agemos":"36","L":"-0.60333785","M":"14.32994444","S":"0.111620652","P3":"11.75978387","P5":"12.03991048","P10":"12.49268178","P25":"13.31277633","P50":"14.32994444","P75":"15.47772447","P90":"16.6423691","P95":"17.40816491","P97":"17.93624653"}];
      lb = 2.204622621;
      var p3data = [];
        for(var i=0; i<=37; i +=1)
        {
            p3data.push({month: data[i].Agemos, value: data[i].P3 * lb});
        }
    var c = new growthChart();
    c.render();
    c.genLineData();
    a=c.displayLabels(p3data, "P3");
    it('Check P3 Label Space', function() {
      expect(a[0]).not.toBe(null);
    });
    it('Check P3 Label Text', function() {
      expect(a[1]).not.toBe(null);
    });
  });

  describe('Check User Input Plot' ,function() {
    var data = { month: '20.5', weight: '11' };
    var data2 = { month: '0', weight: '2' };
    var data3 = { month: '3', weight: '7' };
    var data4 = { month: '9', weight: '13' };
    var data5 = { month: '20', weight: '9' };
    var data6 = { month: '6', weight: '4' };
    var data7 = { month: '11.5', weight: '10' };
    var data8 = { month: '3.5', weight: '9' };
    var data9 = { months: '3.5', weight: '9' };
    var c = new growthChart();
    c.render();
    it('Check Summary Text for between 10% & 25%', function() {
      a=c.plotInputs(data, "English");
      expect(a).toBe("Growth rate between 10% and 25%");
    });
    it('Check Summary Text for between 3% or below', function() {
      a=c.plotInputs(data6, "English");
      expect(a).toBe("Growth rate 3% or below");
    });
    it('Check Summary Text for below 3%', function() {
      a=c.plotInputs(data2, "English");
      expect(a).toBe("Growth rate 3% or below");
    });
    it('Check Summary Text for below 3% ', function() {
      a=c.plotInputs(data5, "English");
      expect(a).toBe("Growth rate 3% or below");
    });
    it('Check Summary Text for between 75% & 90%', function() {
      a=c.plotInputs(data3, "English");
      expect(a).toBe("Growth rate between 75% & 90%");
    });
    it('Check Summary Text for between 25% & 50%', function() {
      a=c.plotInputs(data7, "English");
      expect(a).toBe("Growth rate between 25% & 50%");
    });
    it('Check Summary Text for Growth rate above 97%', function() {
      a=c.plotInputs(data4, "French");
      expect(a).toBe("Croissance taux supérieur à 97%");
    });
    it('Check Summary Text for Growth rate above 97%', function() {
      a=c.plotInputs(data8, "English");
      expect(a).toBe("Growth rate above 97%");
    });
    it('Check Input Plot', function() {
      a=c.drawCircle(data);
      expect(a).not.toBe(null);
    });
    it('Check Mouse Move Handler English', function() {
      a=c.mouseMoveHandler(data9, "English");
      expect(a).not.toBe(null);
    });
    it('Check Mouse Move Handler French', function() {
      a=c.mouseMoveHandler(data9, "French");
      expect(a).not.toBe(null);
    });

  });

  describe('Checking Label and Title' ,function() {
    var c = new growthChart();
    c.render();
    a = c.displayTitles("WFA Chart", "Age");
    it('Check Title', function() {
      expect(a[0]).not.toBe(null);
    });
    it('Check Label Text', function() {
      expect(a[1]).not.toBe(null);
    });
  });
  
  function getSvg() {
    return d3.select('svg');
  }
});