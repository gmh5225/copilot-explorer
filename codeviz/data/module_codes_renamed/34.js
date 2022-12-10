var M_random_stuff_NOTSURE;
M_random_stuff_NOTSURE = require("random-stuff");
require("crypto-js-x64-core");
(function () {
  var e = M_random_stuff_NOTSURE,
    t = e.lib.Hasher,
    n = e.x64,
    o = n.Word,
    i = n.WordArray,
    s = e.algo;
  function a() {
    return o.create.apply(o, arguments);
  }
  var c = [
      a(1116352408, 3609767458),
      a(1899447441, 602891725),
      a(3049323471, 3964484399),
      a(3921009573, 2173295548),
      a(961987163, 4081628472),
      a(1508970993, 3053834265),
      a(2453635748, 2937671579),
      a(2870763221, 3664609560),
      a(3624381080, 2734883394),
      a(310598401, 1164996542),
      a(607225278, 1323610764),
      a(1426881987, 3590304994),
      a(1925078388, 4068182383),
      a(2162078206, 991336113),
      a(2614888103, 633803317),
      a(3248222580, 3479774868),
      a(3835390401, 2666613458),
      a(4022224774, 944711139),
      a(264347078, 2341262773),
      a(604807628, 2007800933),
      a(770255983, 1495990901),
      a(1249150122, 1856431235),
      a(1555081692, 3175218132),
      a(1996064986, 2198950837),
      a(2554220882, 3999719339),
      a(2821834349, 766784016),
      a(2952996808, 2566594879),
      a(3210313671, 3203337956),
      a(3336571891, 1034457026),
      a(3584528711, 2466948901),
      a(113926993, 3758326383),
      a(338241895, 168717936),
      a(666307205, 1188179964),
      a(773529912, 1546045734),
      a(1294757372, 1522805485),
      a(1396182291, 2643833823),
      a(1695183700, 2343527390),
      a(1986661051, 1014477480),
      a(2177026350, 1206759142),
      a(2456956037, 344077627),
      a(2730485921, 1290863460),
      a(2820302411, 3158454273),
      a(3259730800, 3505952657),
      a(3345764771, 106217008),
      a(3516065817, 3606008344),
      a(3600352804, 1432725776),
      a(4094571909, 1467031594),
      a(275423344, 851169720),
      a(430227734, 3100823752),
      a(506948616, 1363258195),
      a(659060556, 3750685593),
      a(883997877, 3785050280),
      a(958139571, 3318307427),
      a(1322822218, 3812723403),
      a(1537002063, 2003034995),
      a(1747873779, 3602036899),
      a(1955562222, 1575990012),
      a(2024104815, 1125592928),
      a(2227730452, 2716904306),
      a(2361852424, 442776044),
      a(2428436474, 593698344),
      a(2756734187, 3733110249),
      a(3204031479, 2999351573),
      a(3329325298, 3815920427),
      a(3391569614, 3928383900),
      a(3515267271, 566280711),
      a(3940187606, 3454069534),
      a(4118630271, 4000239992),
      a(116418474, 1914138554),
      a(174292421, 2731055270),
      a(289380356, 3203993006),
      a(460393269, 320620315),
      a(685471733, 587496836),
      a(852142971, 1086792851),
      a(1017036298, 365543100),
      a(1126000580, 2618297676),
      a(1288033470, 3409855158),
      a(1501505948, 4234509866),
      a(1607167915, 987167468),
      a(1816402316, 1246189591),
    ],
    l = [];
  !(function () {
    for (var e = 0; e < 80; e++) l[e] = a();
  })();
  var u = (s.SHA512 = t.extend({
    _doReset: function () {
      this._hash = new i.init([
        new o.init(1779033703, 4089235720),
        new o.init(3144134277, 2227873595),
        new o.init(1013904242, 4271175723),
        new o.init(2773480762, 1595750129),
        new o.init(1359893119, 2917565137),
        new o.init(2600822924, 725511199),
        new o.init(528734635, 4215389547),
        new o.init(1541459225, 327033209),
      ]);
    },
    _doProcessBlock: function (e, t) {
      for (
        var n = this._hash.words,
          r = n[0],
          o = n[1],
          i = n[2],
          s = n[3],
          a = n[4],
          u = n[5],
          d = n[6],
          p = n[7],
          h = r.high,
          f = r.low,
          m = o.high,
          g = o.low,
          _ = i.high,
          y = i.low,
          v = s.high,
          b = s.low,
          w = a.high,
          x = a.low,
          E = u.high,
          C = u.low,
          S = d.high,
          T = d.low,
          k = p.high,
          I = p.low,
          P = h,
          A = f,
          O = m,
          N = g,
          R = _,
          M = y,
          L = v,
          $ = b,
          D = w,
          F = x,
          j = E,
          q = C,
          B = S,
          U = T,
          H = k,
          z = I,
          G = 0;
        G < 80;
        G++
      ) {
        var V,
          W,
          K = l[G];
        if (G < 16) {
          W = K.high = 0 | e[t + 2 * G];
          V = K.low = 0 | e[t + 2 * G + 1];
        } else {
          var J = l[G - 15],
            X = J.high,
            Q = J.low,
            Y = ((X >>> 1) | (Q << 31)) ^ ((X >>> 8) | (Q << 24)) ^ (X >>> 7),
            Z =
              ((Q >>> 1) | (X << 31)) ^
              ((Q >>> 8) | (X << 24)) ^
              ((Q >>> 7) | (X << 25)),
            ee = l[G - 2],
            te = ee.high,
            ne = ee.low,
            re =
              ((te >>> 19) | (ne << 13)) ^
              ((te << 3) | (ne >>> 29)) ^
              (te >>> 6),
            oe =
              ((ne >>> 19) | (te << 13)) ^
              ((ne << 3) | (te >>> 29)) ^
              ((ne >>> 6) | (te << 26)),
            ie = l[G - 7],
            se = ie.high,
            ae = ie.low,
            ce = l[G - 16],
            le = ce.high,
            ue = ce.low;
          W =
            (W =
              (W = Y + se + ((V = Z + ae) >>> 0 < Z >>> 0 ? 1 : 0)) +
              re +
              ((V += oe) >>> 0 < oe >>> 0 ? 1 : 0)) +
            le +
            ((V += ue) >>> 0 < ue >>> 0 ? 1 : 0);
          K.high = W;
          K.low = V;
        }
        var de,
          pe = (D & j) ^ (~D & B),
          he = (F & q) ^ (~F & U),
          fe = (P & O) ^ (P & R) ^ (O & R),
          me = (A & N) ^ (A & M) ^ (N & M),
          ge =
            ((P >>> 28) | (A << 4)) ^
            ((P << 30) | (A >>> 2)) ^
            ((P << 25) | (A >>> 7)),
          _e =
            ((A >>> 28) | (P << 4)) ^
            ((A << 30) | (P >>> 2)) ^
            ((A << 25) | (P >>> 7)),
          ye =
            ((D >>> 14) | (F << 18)) ^
            ((D >>> 18) | (F << 14)) ^
            ((D << 23) | (F >>> 9)),
          ve =
            ((F >>> 14) | (D << 18)) ^
            ((F >>> 18) | (D << 14)) ^
            ((F << 23) | (D >>> 9)),
          be = c[G],
          we = be.high,
          xe = be.low,
          Ee = H + ye + ((de = z + ve) >>> 0 < z >>> 0 ? 1 : 0),
          Ce = _e + me;
        H = B;
        z = U;
        B = j;
        U = q;
        j = D;
        q = F;
        D =
          (L +
            (Ee =
              (Ee =
                (Ee = Ee + pe + ((de += he) >>> 0 < he >>> 0 ? 1 : 0)) +
                we +
                ((de += xe) >>> 0 < xe >>> 0 ? 1 : 0)) +
              W +
              ((de += V) >>> 0 < V >>> 0 ? 1 : 0)) +
            ((F = ($ + de) | 0) >>> 0 < $ >>> 0 ? 1 : 0)) |
          0;
        L = R;
        $ = M;
        R = O;
        M = N;
        O = P;
        N = A;
        P =
          (Ee +
            (ge + fe + (Ce >>> 0 < _e >>> 0 ? 1 : 0)) +
            ((A = (de + Ce) | 0) >>> 0 < de >>> 0 ? 1 : 0)) |
          0;
      }
      f = r.low = f + A;
      r.high = h + P + (f >>> 0 < A >>> 0 ? 1 : 0);
      g = o.low = g + N;
      o.high = m + O + (g >>> 0 < N >>> 0 ? 1 : 0);
      y = i.low = y + M;
      i.high = _ + R + (y >>> 0 < M >>> 0 ? 1 : 0);
      b = s.low = b + $;
      s.high = v + L + (b >>> 0 < $ >>> 0 ? 1 : 0);
      x = a.low = x + F;
      a.high = w + D + (x >>> 0 < F >>> 0 ? 1 : 0);
      C = u.low = C + q;
      u.high = E + j + (C >>> 0 < q >>> 0 ? 1 : 0);
      T = d.low = T + U;
      d.high = S + B + (T >>> 0 < U >>> 0 ? 1 : 0);
      I = p.low = I + z;
      p.high = k + H + (I >>> 0 < z >>> 0 ? 1 : 0);
    },
    _doFinalize: function () {
      var e = this._data,
        t = e.words,
        n = 8 * this._nDataBytes,
        r = 8 * e.sigBytes;
      t[r >>> 5] |= 128 << (24 - (r % 32));
      t[30 + (((r + 128) >>> 10) << 5)] = Math.floor(n / 4294967296);
      t[31 + (((r + 128) >>> 10) << 5)] = n;
      e.sigBytes = 4 * t.length;
      this._process();
      return this._hash.toX32();
    },
    clone: function () {
      var e = t.clone.call(this);
      e._hash = this._hash.clone();
      return e;
    },
    blockSize: 32,
  }));
  e.SHA512 = t._createHelper(u);
  e.HmacSHA512 = t._createHmacHelper(u);
})();
module.exports = M_random_stuff_NOTSURE.SHA512;
