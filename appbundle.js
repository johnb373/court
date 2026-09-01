(function(){
  var CSS = "\n  :root {\n    --bg:#0F2E24; --card:#173D30; --card-border:#2A5745;\n    --accent:#D6E62B; --accent-ink:#0F2E24;\n    --muted:#9FBDAE; --muted2:#6E9483;\n    --paper:#F5F3EC; --ink:#16232B; --net:#B9C2B4;\n    --court-head:#1F5C46;\n    --bye-bg:#3A2E14; --bye-border:#6B4F1D; --bye-text:#E8C158;\n    --danger:#D4674A; --danger-bg:#3A1E16; --danger-border:#6B2F1D;\n  }\n  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\n  html,body{margin:0;min-height:100%;background:var(--bg);overscroll-behavior:none}\n  body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;color:var(--paper);display:flex;justify-content:center}\n  .sb{font-family:\"Arial Narrow\",\"Helvetica Neue Condensed\",sans-serif;font-weight:800;letter-spacing:.03em}\n  .app{width:100%;max-width:480px;min-height:100vh;display:flex;flex-direction:column;padding:20px 18px calc(18px + env(safe-area-inset-bottom))}\n  .hidden{display:none !important}\n  button{font-family:inherit;border:none;cursor:pointer}\n  input[type=text]{background:var(--card);color:var(--paper);border:1px solid var(--card-border);border-radius:12px;padding:14px 16px;font-size:16px;outline:none;width:100%}\n\n  .club{font-size:19px;line-height:1.1;color:var(--paper);opacity:.9}\n  .help-link{background:none;border:none;color:var(--accent);font-size:13px;font-weight:700;text-decoration:underline;text-underline-offset:3px;padding:2px 0 0;margin-bottom:14px;text-align:left}\n  .help-body{flex:1;overflow-y:auto;font-size:14px;line-height:1.55;color:var(--paper);padding-bottom:20px}\n  .help-body h3{color:var(--accent);font-size:15px;margin:20px 0 6px;letter-spacing:.02em}\n  .help-body h3:first-child{margin-top:0}\n  .help-body p{margin:0 0 10px}\n  .help-body ul{margin:0 0 10px;padding-left:20px}\n  .help-body li{margin-bottom:6px}\n  .help-body .step{background:var(--card);border:1px solid var(--card-border);border-radius:10px;padding:10px 12px;margin-bottom:8px}\n  .help-body .step b{color:var(--accent)}\n  .help-body em{color:var(--muted);font-style:normal}\n  .title{font-size:29px;line-height:1;color:var(--accent);margin-top:5px}\n  .subtitle{font-size:14px;color:var(--muted);margin:10px 0 20px}\n  .row{display:flex;gap:8px;margin-bottom:8px}\n  .add-btn{background:var(--accent);color:var(--accent-ink);border-radius:12px;width:52px;flex-shrink:0;font-size:26px;font-weight:700}\n  .add-btn:active{transform:scale(.95)}\n  .warn{font-size:13px;color:var(--danger);margin-bottom:8px}\n  .meta{font-size:13px;color:var(--muted);margin-bottom:12px}\n  .list{flex:1;min-height:80px;overflow-y:auto;margin-bottom:12px}\n  .empty{text-align:center;padding:32px 10px;border-radius:12px;border:1px dashed var(--card-border);color:var(--muted2);font-size:14px}\n  .player{display:flex;align-items:center;justify-content:space-between;background:var(--card);border:1px solid var(--card-border);border-radius:12px;padding:11px 14px;margin-bottom:8px}\n  .player-left{display:flex;align-items:center;gap:12px}\n  .badge{width:28px;height:28px;border-radius:999px;background:var(--bg);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;flex-shrink:0}\n  .player-name{font-weight:600}\n  .remove{background:none;color:var(--muted2);font-size:18px;padding:4px 8px}\n\n  .field-label{display:block;font-size:13px;color:var(--muted);margin-bottom:8px}\n  .mode-toggles{display:flex;gap:8px;margin-bottom:16px}\n  .mode-btn{flex:1;padding:11px 0;border-radius:12px;text-align:center;font-weight:800;background:var(--card);color:var(--muted2);border:1px solid var(--card-border);font-size:14px;line-height:1.25}\n  .mode-btn span{display:block;font-size:10px;font-weight:600;opacity:.8}\n  .mode-btn.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}\n  .mode-btn:active{transform:scale(.96)}\n  .rounds-row{display:flex;align-items:center;gap:12px;margin-bottom:16px}\n  .rounds-btn{width:52px;height:48px;border-radius:12px;background:var(--card);border:1px solid var(--card-border);color:var(--paper);font-size:24px;font-weight:800}\n  .rounds-btn:active{transform:scale(.95)}\n  .rounds-val{flex:1;text-align:center;font-size:26px;font-weight:800;color:var(--accent)}\n  .court-toggles{display:flex;gap:8px;margin-bottom:16px}\n  .court-toggle{flex:1;padding:12px 0;border-radius:12px;text-align:center;font-weight:800;background:var(--card);color:var(--muted2);border:1px solid var(--card-border);font-size:16px}\n  .court-toggle.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}\n  .court-toggle:active{transform:scale(.96)}\n\n  .start-row{display:flex;gap:8px;align-items:center;margin-bottom:16px}\n  .start-row input{background:var(--card);color:var(--paper);border:1px solid var(--card-border);border-radius:12px;padding:12px;font-size:16px;font-family:inherit;flex:1}\n  .now-btn{background:var(--card);border:1px solid var(--card-border);color:var(--muted);border-radius:12px;padding:12px 14px;font-size:13px;font-weight:700}\n\n  .sched-brand{font-size:15px;color:var(--muted2);letter-spacing:.08em}\n  .danger-wrap{margin-top:12px;border-top:1px solid var(--card-border);padding-top:12px}\n  .danger-btn{width:100%;background:none;border:1px solid var(--danger-border);color:var(--danger);border-radius:10px;padding:11px;font-size:12px;font-weight:700}\n  .danger-btn.armed{background:var(--danger);color:#fff;border-color:var(--danger)}\n  .shuffle-opt{display:flex;gap:10px;align-items:flex-start;background:var(--card);border:1px solid var(--card-border);border-radius:12px;padding:12px;margin-bottom:14px;font-size:13px;color:var(--muted);line-height:1.4}\n  .shuffle-opt input{width:20px;height:20px;flex-shrink:0;accent-color:var(--accent);margin:0}\n  .shuffle-opt em{font-style:normal;color:var(--muted2);font-size:11px}\n  .fr-optional{opacity:.62;border-style:dashed}\n  .fr-tag{font-size:10px;color:var(--muted2);font-weight:800;letter-spacing:.05em}\n  .plan-box{background:var(--card);border:1px solid var(--card-border);border-radius:14px;padding:14px;margin-bottom:14px}\n  .plan-headline{font-size:15px;font-weight:800;color:var(--accent);margin-bottom:6px}\n  .plan-detail{font-size:13px;color:var(--muted);line-height:1.5}\n  .plan-flag{font-size:12px;color:var(--bye-text);margin-top:8px;line-height:1.45}\n\n  .primary-btn{width:100%;background:var(--accent);color:var(--accent-ink);border-radius:16px;padding:16px;font-size:18px;font-weight:800}\n  .primary-btn:disabled{opacity:.3}\n  .primary-btn:active:not(:disabled){transform:scale(.98)}\n  .hint{text-align:center;font-size:12px;color:var(--muted2);margin-top:8px}\n\n  .resume-box{background:var(--bye-bg);border:1px solid var(--bye-border);border-radius:14px;padding:14px;margin-bottom:16px}\n  .resume-title{font-size:14px;font-weight:800;color:var(--bye-text);margin-bottom:4px}\n  .resume-detail{font-size:13px;color:var(--muted);line-height:1.45;margin-bottom:10px}\n  .resume-actions{display:flex;gap:8px}\n  .resume-actions button{flex:1;border-radius:10px;padding:11px;font-size:13px;font-weight:800}\n  .resume-yes{background:var(--accent);color:var(--accent-ink)}\n  .resume-no{background:none;border:1px solid var(--card-border);color:var(--muted2)}\n\n  .sched-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;font-size:14px}\n  .back-link{color:var(--muted);background:none;font-size:14px;padding:6px 0}\n  .round-label{color:var(--muted)}\n  .round-big{font-size:42px;text-align:center;color:var(--accent);margin:2px 0 8px}\n\n  .timer-bar{display:flex;align-items:center;gap:10px;background:var(--card);border:1px solid var(--card-border);border-radius:14px;padding:10px 12px;margin-bottom:10px}\n  .timer-clock{font-family:\"Arial Narrow\",sans-serif;font-weight:800;font-size:32px;color:var(--accent);min-width:92px}\n  .timer-clock.over{color:var(--danger)}\n  .timer-meta{flex:1;font-size:11px;color:var(--muted2);line-height:1.35}\n  .jump-btn{background:var(--accent);color:var(--accent-ink);border-radius:10px;padding:9px 11px;font-size:11px;font-weight:800}\n  .jump-btn.hiddenish{opacity:0;pointer-events:none}\n\n  .byes{text-align:center;border-radius:12px;padding:11px;margin-bottom:10px;background:var(--bye-bg);color:var(--bye-text);border:1px solid var(--bye-border);font-weight:800;font-size:17px}\n  .integrity{text-align:center;border-radius:12px;padding:10px;margin-bottom:10px;background:var(--danger-bg);color:var(--danger);border:1px solid var(--danger-border);font-weight:700;font-size:13px}\n  .courts{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:12px;min-height:0}\n  .court-card{background:var(--paper);border-radius:16px;overflow:hidden;flex:1 1 0;min-height:150px;display:flex;flex-direction:column}\n  .court-head{background:var(--court-head);color:var(--paper);text-align:center;padding:10px 0;font-size:21px;flex-shrink:0}\n  .court-body{padding:14px 12px;text-align:center;flex:1;display:flex;flex-direction:column;justify-content:center;gap:2px}\n  .pair{color:var(--ink);font-weight:800;font-size:26px;line-height:1.2}\n  .net-wrap{position:relative;width:78%;margin:14px auto;border-top:2px dashed var(--net)}\n  .net-label{position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:var(--paper);color:#8A9389;font-size:10px;letter-spacing:.15em;padding:0 8px}\n\n  .nav{display:flex;gap:10px;margin-top:10px;flex-shrink:0}\n  .nav-btn{flex:1;border-radius:16px;padding:15px;font-weight:800;font-size:16px}\n  .nav-btn.prev{background:var(--card);color:var(--paper);border:1px solid var(--card-border)}\n  .nav-btn.next{background:var(--accent);color:var(--accent-ink)}\n  .nav-btn:disabled{opacity:.3}\n  .nav-btn:active:not(:disabled){transform:scale(.98)}\n\n  .util-row{display:flex;gap:8px;margin-top:8px;flex-shrink:0}\n  .util-btn{flex:1;background:none;border:1px solid var(--card-border);color:var(--muted);border-radius:12px;padding:10px;font-size:12px;font-weight:700}\n\n  .util-btn.add-round{border-color:var(--accent);color:var(--accent)}\n  .manage-panel{background:var(--card);border:1px solid var(--card-border);border-radius:14px;padding:14px;margin-top:8px}\n  .manage-section-label{font-size:11px;color:var(--muted);margin:0 0 8px;text-transform:uppercase;letter-spacing:.06em}\n  .manage-row{display:flex;gap:8px;margin-bottom:6px}\n  .manage-add-btn{background:var(--accent);color:var(--accent-ink);border-radius:10px;width:46px;font-size:20px;font-weight:800;flex-shrink:0}\n  .active-player{display:flex;align-items:center;justify-content:space-between;padding:9px 10px;border-radius:10px;margin-bottom:6px;background:var(--bg);gap:8px}\n  .active-player .nm{font-size:14px;font-weight:600;flex:1}\n  .gone-btn{background:none;color:var(--muted2);font-size:11px;font-weight:800;padding:6px 8px;border:1px solid var(--card-border);border-radius:8px}\n  .gone-btn.armed{background:var(--danger);color:#fff;border-color:var(--danger)}\n  .cancel-btn{background:none;color:var(--muted2);font-size:11px;font-weight:700;padding:6px}\n  .shuffle-wrap{margin-top:10px;border-top:1px solid var(--card-border);padding-top:10px}\n  .shuffle-btn{width:100%;background:none;border:1px solid var(--card-border);color:var(--muted2);border-radius:10px;padding:11px;font-size:13px;font-weight:700}\n  .shuffle-btn.armed{background:var(--danger);color:#fff;border-color:var(--danger)}\n  .shuffle-note{font-size:11px;color:var(--muted2);text-align:center;margin-top:6px}\n\n  /* Full schedule (screenshot view) */\n  .full-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}\n  .full-title{font-size:26px;color:var(--accent)}\n  .full-sub{font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.5}\n  .fr{background:var(--card);border:1px solid var(--card-border);border-radius:12px;padding:11px 12px;margin-bottom:9px}\n  .fr-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:7px}\n  .fr-round{font-size:15px;font-weight:800;color:var(--accent)}\n  .fr-time{font-size:12px;color:var(--muted);font-weight:700}\n  .fr-line{font-size:13px;color:var(--paper);line-height:1.55}\n  .fr-court{color:var(--muted2);font-weight:800;font-size:11px}\n  .fr-bye{font-size:12px;color:var(--bye-text);margin-top:5px}\n  .fr-now{border-color:var(--accent)}\n  .ver{position:fixed;right:8px;bottom:6px;font-size:11px;color:#D6E62B;z-index:60;pointer-events:none;font-weight:700}\n  .toast{position:fixed;left:50%;transform:translateX(-50%);bottom:24px;background:var(--paper);color:var(--ink);padding:12px 18px;border-radius:12px;font-size:14px;font-weight:700;box-shadow:0 6px 20px rgba(0,0,0,.35);z-index:50}\n";
  var HTML = "<div class=\"app\">\n\n  <!-- SETUP -->\n  <div id=\"setupScreen\">\n    <div class=\"club sb\">TERMONFECKIN<br/>SOCIAL TENNIS</div>\n    <div class=\"title sb\">COURT ROTATION</div>\n    <div class=\"subtitle\">Add players as they arrive, then build the round order. <span id=\"verTag2\"></span></div>\n    <button type=\"button\" class=\"help-link\" id=\"helpBtn\">How it works, and how to keep it on your phone</button>\n\n    <div class=\"resume-box hidden\" id=\"resumeBox\">\n      <div class=\"resume-title\">Session in progress</div>\n      <div class=\"resume-detail\" id=\"resumeDetail\"></div>\n      <div class=\"resume-actions\">\n        <button class=\"resume-yes\" id=\"resumeYes\" type=\"button\">Resume</button>\n        <button class=\"resume-no\" id=\"resumeNo\" type=\"button\">Discard</button>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <input type=\"text\" id=\"nameInput\" placeholder=\"Player name\" autocomplete=\"off\" />\n      <button class=\"add-btn\" id=\"addBtn\" type=\"button\">+</button>\n    </div>\n    <div class=\"warn\" id=\"setupWarn\"></div>\n    <div class=\"meta\" id=\"metaLine\">0 of 12 players</div>\n\n    <div class=\"list\" id=\"playerList\">\n      <div class=\"empty\">No players yet \u2014 add your first one above.</div>\n    </div>\n\n    <label class=\"field-label\">How to run the session</label>\n    <div class=\"mode-toggles\">\n      <button type=\"button\" class=\"mode-btn on\" id=\"modeManual\">Rounds<br/><span>no clock</span></button>\n      <button type=\"button\" class=\"mode-btn\" id=\"modeTimed\">Timed<br/><span>fixed finish</span></button>\n    </div>\n\n    <label class=\"field-label\">Courts available today</label>\n    <div class=\"court-toggles\" id=\"courtToggles\"></div>\n\n    <div id=\"manualBlock\">\n      <label class=\"field-label\">Number of rounds</label>\n      <div class=\"rounds-row\">\n        <button type=\"button\" class=\"rounds-btn\" id=\"roundsMinus\">&minus;</button>\n        <div class=\"rounds-val\" id=\"roundsVal\">4</div>\n        <button type=\"button\" class=\"rounds-btn\" id=\"roundsPlus\">+</button>\n      </div>\n    </div>\n\n    <div id=\"timedBlock\" class=\"hidden\">\n      <label class=\"field-label\">Session must finish by</label>\n      <div class=\"start-row\">\n        <input type=\"time\" id=\"finishTime\" />\n        <button class=\"now-btn\" id=\"plus90Btn\" type=\"button\">90 min<br/>from now</button>\n      </div>\n    </div>\n\n    <label class=\"shuffle-opt\" id=\"shuffleOptRow\">\n      <input type=\"checkbox\" id=\"shuffleOpt\" />\n      <span>Shuffle the order before building<br/><em>Otherwise the first name typed sits out first</em></span>\n    </label>\n\n    <div class=\"plan-box hidden\" id=\"planBox\">\n      <div class=\"plan-headline\" id=\"planHeadline\"></div>\n      <div class=\"plan-detail\" id=\"planDetail\"></div>\n      <div class=\"plan-flag hidden\" id=\"planFlag\"></div>\n    </div>\n\n    <button class=\"primary-btn\" id=\"startBtn\" type=\"button\" disabled>Build Schedule</button>\n    <div class=\"hint\" id=\"hintLine\">Need at least 4 players and 1 court.</div>\n  </div>\n\n  <!-- SCHEDULE -->\n  <div id=\"scheduleScreen\" class=\"hidden\" style=\"display:flex;flex-direction:column;flex:1\">\n    <div class=\"sched-top\">\n      <span class=\"sched-brand sb\">COURT ROTATION</span>\n      <span class=\"round-label\" id=\"roundLabel\">Round 1 of 1</span>\n    </div>\n    <div class=\"round-big sb\" id=\"roundBig\">ROUND 1</div>\n\n    <div class=\"timer-bar\" id=\"timerBar\">\n      <div class=\"timer-clock\" id=\"timerClock\">--:--</div>\n      <div class=\"timer-meta\" id=\"timerMeta\"></div>\n      <button class=\"jump-btn hiddenish\" id=\"jumpBtn\" type=\"button\">GO TO<br/>NOW</button>\n    </div>\n\n    <div class=\"integrity hidden\" id=\"integrityLine\"></div>\n    <div class=\"byes hidden\" id=\"byesLine\"></div>\n    <div class=\"courts\" id=\"courtsWrap\"></div>\n\n    <div class=\"nav\">\n      <button class=\"nav-btn prev\" id=\"prevBtn\" type=\"button\">&larr; Prev</button>\n      <button class=\"nav-btn next\" id=\"nextBtn\" type=\"button\">Next &rarr;</button>\n    </div>\n\n    <div class=\"util-row\">\n      <button class=\"util-btn\" id=\"fullBtn\" type=\"button\">Full schedule</button>\n      <button class=\"util-btn\" id=\"manageToggle\" type=\"button\">Manage players</button>\n    </div>\n    <div class=\"util-row\">\n      <button class=\"util-btn add-round\" id=\"addRoundBtn\" type=\"button\">+ Add another round</button>\n    </div>\n\n    <div class=\"manage-panel hidden\" id=\"managePanel\">\n      <p class=\"manage-section-label\">Add late arrival</p>\n      <div class=\"manage-row\">\n        <input type=\"text\" id=\"lateNameInput\" placeholder=\"Player name\" autocomplete=\"off\" />\n        <button class=\"manage-add-btn\" id=\"lateAddBtn\" type=\"button\">+</button>\n      </div>\n      <div class=\"warn\" id=\"manageWarn\"></div>\n      <p class=\"manage-section-label\">Currently playing</p>\n      <div id=\"activePlayerList\"></div>\n      <div class=\"shuffle-wrap\">\n        <button class=\"shuffle-btn\" id=\"shuffleBtn\" type=\"button\">Shuffle remaining rounds</button>\n        <div class=\"shuffle-note\" id=\"shuffleNote\">Rounds already played stay as they were.</div>\n      </div>\n\n      <div class=\"danger-wrap\">\n        <button class=\"danger-btn\" id=\"backBtn\" type=\"button\">Start over \u2014 clears this session</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- FULL SCHEDULE -->\n  <div id=\"fullScreen\" class=\"hidden\" style=\"display:flex;flex-direction:column;flex:1\">\n    <div class=\"full-head\">\n      <div class=\"full-title sb\">FULL SCHEDULE</div>\n      <button class=\"back-link\" id=\"fullBack\" type=\"button\">&larr; Back to round</button>\n    </div>\n    <div class=\"full-sub\" id=\"fullSub\"></div>\n    <div style=\"flex:1;overflow-y:auto\" id=\"fullList\"></div>\n    <div class=\"hint\" style=\"margin-top:12px\">Screenshot this \u2014 it works even if the app or phone doesn\u2019t.</div>\n  </div>\n\n  <div id=\"helpScreen\" class=\"hidden\" style=\"display:flex;flex-direction:column;flex:1\">\n    <div class=\"full-head\">\n      <div class=\"full-title sb\">HOW IT WORKS</div>\n      <button class=\"back-link\" id=\"helpBack\" type=\"button\">&larr; Back</button>\n    </div>\n    <div class=\"help-body\" id=\"helpBody\"></div>\n  </div>\n\n  <div class=\"ver\" id=\"verTag\"></div>\n</div>";
  var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
  document.body.innerHTML = HTML;
})();

(function () {
  "use strict";

  var APP_VERSION = "v18";
  var MAX_PLAYERS = 12, SESSION_MIN = 90, MIN_ROUND = 15, HARD_FLOOR = 13, IDEAL_ROUND = 30;
  var STORE_KEY = 'courtRotation.v1';

  var players = [], activePlayers = [], selectedCourts = [];
  var rounds = [], roundIdx = 0;
  var sessionStart = null;      // ms epoch
  var lockedRounds = 0, lockedLength = 0;
  var currentPlan = null;
  var mode = "manual";      // "manual" | "timed"
  var manualRounds = 4;
  var armedGoneIdx = -1, shuffleArmed = false, armTimer = null, backArmed = false;
  var tickHandle = null, wakeLock = null, pendingResume = null;

  function $(id) { return document.getElementById(id); }
  var el = {};
  ['nameInput','addBtn','playerList','metaLine','startBtn','hintLine','courtToggles','setupWarn',
   'setupScreen','scheduleScreen','fullScreen','backBtn','roundLabel','roundBig','byesLine',
   'integrityLine','courtsWrap','prevBtn','nextBtn','manageToggle','managePanel','lateNameInput',
   'lateAddBtn','activePlayerList','shuffleBtn','shuffleNote','manageWarn','planBox','planHeadline',
   'planDetail','planFlag','timerClock','timerMeta','jumpBtn','finishTime','plus90Btn','shuffleOpt','fullBtn',
   'modeManual','modeTimed','manualBlock','timedBlock','roundsMinus','roundsPlus','roundsVal','timerBar',
   'fullBack','fullSub','fullList','resumeBox','resumeDetail','resumeYes','resumeNo','addRoundBtn',
   'helpBtn','helpScreen','helpBack','helpBody'
  ].forEach(function (id) { el[id] = $(id); });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function(){ if (t.parentNode) t.parentNode.removeChild(t); }, 2200);
  }
  function nameTaken(list, v) {
    var lo = v.toLowerCase();
    for (var i=0;i<list.length;i++) if (list[i].toLowerCase()===lo) return true;
    return false;
  }
  function cmp(a,b){ for(var i=0;i<a.length;i++){ if(a[i]<b[i])return -1; if(a[i]>b[i])return 1; } return 0; }
  function fmtMin(m){ return (Math.round(m*10)/10).toString().replace(/\.0$/,''); }
  function clockStr(ms){
    var d = new Date(ms);
    var h = d.getHours(), mn = d.getMinutes();
    return h + ':' + (mn<10?'0':'') + mn;
  }

  // ---------- storage (never fatal) ----------
  function save() {
    try {
      if (!window.localStorage) return;
      if (!rounds.length) { localStorage.removeItem(STORE_KEY); return; }
      localStorage.setItem(STORE_KEY, JSON.stringify({
        activePlayers: activePlayers, selectedCourts: selectedCourts,
        rounds: rounds, roundIdx: roundIdx, sessionStart: sessionStart,
        lockedRounds: lockedRounds, lockedLength: lockedLength,
        mode: mode, savedAt: Date.now()
      }));
    } catch (e) {}
  }
  function loadSaved() {
    try {
      if (!window.localStorage) return null;
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return null;
      var d = JSON.parse(raw);
      if (!d || !d.rounds || !d.rounds.length) return null;
      if (d.mode === "manual") {
        if (Date.now() - (d.savedAt||0) > 6*3600*1000) return null;   // stale after 6h
        return d;
      }
      if (!d.sessionStart) return null;
      var endsAt = d.sessionStart + d.lockedRounds * d.lockedLength * 60000;
      if (Date.now() > endsAt + 3*3600*1000) return null;
      return d;
    } catch (e) { return null; }
  }
  function clearSaved(){ try { if (window.localStorage) localStorage.removeItem(STORE_KEY); } catch(e){} }

  // ---------- planner ----------
  function makePlan(n, courtNums, availableMin) {
    var courts = Math.min(courtNums.length, Math.floor(n/4));
    if (courts === 0) return null;
    var avail = availableMin || SESSION_MIN;
    if (avail < HARD_FLOOR) return null;
    var sitting = n - courts*4, best = null, bestScore = null;
    var maxRounds = Math.floor(avail / HARD_FLOOR);
    for (var r=1; r<=maxRounds; r++) {
      var length = avail / r;
      if (length < HARD_FLOOR - 1e-6) continue;
      var maxBye = 0, uneven = 0;
      if (sitting > 0) {
        var total = r*sitting, base = Math.floor(total/n), rem = total % n;
        maxBye = base + (rem?1:0); uneven = rem?1:0;
      }
      var shortfall = length < MIN_ROUND ? (MIN_ROUND - length) : 0;
      var score = [maxBye*length, maxBye>0?length:0, uneven, shortfall, Math.abs(length-IDEAL_ROUND)];
      if (!bestScore || cmp(score,bestScore) < 0) {
        bestScore = score;
        best = {rounds:r, length:length, courts:courts, sitting:sitting, maxBye:maxBye,
                uneven:uneven, shaved: length < MIN_ROUND - 1e-6, avail: avail};
      }
    }
    return best;
  }

  // Build a schedule that (1) keeps sit-outs balanced within one round for
  // everyone, and (2) maximises how many different partners each player gets.
  // Rule 1 is a hard constraint; rule 2 is optimised within it.
  function buildRounds(list, courtNums, forcedRounds, priorRounds) {
    var n = list.length;
    var courts = Math.min(courtNums.length, Math.floor(n/4));
    if (courts === 0) return [];
    var leftover = n - courts*4;
    var roundCount;
    if (forcedRounds) roundCount = forcedRounds;
    else { var p = makePlan(n, courtNums); roundCount = p ? p.rounds : (leftover>0 ? n : Math.min(6,n)); }

    var byeCount = {}, partnered = {}, i, j;
    var lastRoundByesSeed = {};
    for (i=0;i<n;i++) { byeCount[list[i]] = 0; partnered[list[i]] = {}; }
    // If continuing an existing session, carry forward what has already happened
    // so sit-outs stay balanced and partnerships keep varying.
    if (priorRounds && priorRounds.length) {
      for (i=0;i<priorRounds.length;i++) {
        var pr = priorRounds[i];
        for (j=0;j<pr.byes.length;j++) if (byeCount[pr.byes[j]] !== undefined) byeCount[pr.byes[j]]++;
        for (j=0;j<pr.courts.length;j++) {
          var pcc = pr.courts[j];
          [[pcc.top[0],pcc.top[1]],[pcc.bottom[0],pcc.bottom[1]]].forEach(function(pp){
            if (partnered[pp[0]] && partnered[pp[1]]) {
              partnered[pp[0]][pp[1]] = (partnered[pp[0]][pp[1]]||0)+1;
              partnered[pp[1]][pp[0]] = (partnered[pp[1]][pp[0]]||0)+1;
            }
          });
        }
      }
      var lb = priorRounds[priorRounds.length-1].byes;
      for (j=0;j<lb.length;j++) lastRoundByesSeed[lb[j]] = true;
    }
    function pairSeen(a,b){ return partnered[a][b] || 0; }
    function markPair(a,b){ partnered[a][b] = pairSeen(a,b)+1; partnered[b][a] = pairSeen(b,a)+1; }

    var out = [], lastRoundByes = lastRoundByesSeed;
    for (var r=0; r<roundCount; r++) {
      // --- byes: always the players who have sat out least so far ---
      var order = list.slice();
      order.sort(function(a,b){
        // 1. fewest sit-outs so far (the hard fairness rule)
        var d = byeCount[a] - byeCount[b];
        if (d !== 0) return d;
        // 2. avoid sitting out two rounds running
        var la = lastRoundByes[a] ? 1 : 0, lb = lastRoundByes[b] ? 1 : 0;
        if (la !== lb) return la - lb;
        return Math.random() - 0.5;
      });
      var byes = leftover>0 ? order.slice(0, leftover) : [];
      var byeSet = {};
      for (i=0;i<byes.length;i++) byeSet[byes[i]] = true;
      var active = [];
      for (i=0;i<n;i++) if (!byeSet[list[i]]) active.push(list[i]);

      // --- pairings: try many arrangements, keep the one with fewest repeats ---
      var bestGroups = null, bestCost = Infinity;
      for (var attempt=0; attempt<300; attempt++) {
        var a = active.slice();
        for (i=a.length-1;i>0;i--) { j = Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; }
        var cost = 0, groups = [];
        for (var c=0;c<courts;c++) {
          var f = a.slice(c*4, c*4+4);
          cost += pairSeen(f[0],f[1]) + pairSeen(f[2],f[3]);
          groups.push(f);
        }
        if (cost < bestCost) { bestCost = cost; bestGroups = groups; if (cost === 0) break; }
      }

      for (i=0;i<byes.length;i++) byeCount[byes[i]]++;
      lastRoundByes = {};
      for (i=0;i<byes.length;i++) lastRoundByes[byes[i]] = true;
      var courtObjs = [];
      for (i=0;i<bestGroups.length;i++) {
        var g = bestGroups[i];
        markPair(g[0],g[1]); markPair(g[2],g[3]);
        courtObjs.push({court:courtNums[i], top:[g[0],g[1]], bottom:[g[2],g[3]]});
      }
      out.push({byes:byes, courts:courtObjs});
    }

    // --- safety net: sit-outs must never differ by more than one ---
    var counts = [];
    for (i=0;i<n;i++) counts.push(byeCount[list[i]]);
    var mx = Math.max.apply(null, counts), mn = Math.min.apply(null, counts);
    if (mx - mn > 1 && !priorRounds) {
      // fall back to a strict rotation, which guarantees balance
      out = rotationFallback(list, courtNums, roundCount);
    }
    return out;
  }

  function rotationFallback(list, courtNums, roundCount) {
    var n = list.length;
    var courts = Math.min(courtNums.length, Math.floor(n/4));
    var leftover = n - courts*4;
    var out = [], i, k;
    for (var r=0;r<roundCount;r++) {
      var byes = [], active = [];
      if (leftover > 0) {
        var start = (r * leftover) % n;
        for (k=0;k<leftover;k++) byes.push(list[(start+k)%n]);
        for (k=0;k<n-leftover;k++) active.push(list[(start+leftover+k)%n]);
      } else {
        var shift = r % n;
        active = list.slice(shift).concat(list.slice(0, shift));
      }
      var groups = [];
      for (var c=0;c<courts;c++) {
        var f = active.slice(c*4, c*4+4);
        groups.push({court:courtNums[c], top:[f[0],f[1]], bottom:[f[2],f[3]]});
      }
      out.push({byes:byes, courts:groups});
    }
    return out;
  }

  function roundStartMs(i){ return sessionStart + i*lockedLength*60000; }
  function roundEndMs(i){ return roundStartMs(i+1); }
  function liveRoundIdx() {
    if (mode === "manual" || !sessionStart || !lockedLength) return roundIdx;
    var elapsed = Date.now() - sessionStart;
    var i = Math.floor(elapsed / (lockedLength*60000));
    if (i < 0) i = 0;
    if (i > rounds.length-1) i = rounds.length-1;
    return i;
  }

  // ---------- setup screen ----------
  function renderCourtToggles() {
    var html = '';
    [1,2,3,4].forEach(function(n){
      html += '<button type="button" class="court-toggle' +
        (selectedCourts.indexOf(n)>-1?' on':'') + '" data-court="'+n+'">'+n+'</button>';
    });
    el.courtToggles.innerHTML = html;
    Array.prototype.forEach.call(el.courtToggles.querySelectorAll('.court-toggle'), function(btn){
      btn.addEventListener('click', function(){
        var n = parseInt(btn.getAttribute('data-court'),10);
        var i = selectedCourts.indexOf(n);
        if (i>-1) selectedCourts.splice(i,1); else selectedCourts.push(n);
        selectedCourts.sort(function(a,b){return a-b;});
        renderCourtToggles(); renderSetup();
      });
    });
  }

  function addPlayer() {
    var v = el.nameInput.value.trim();
    el.setupWarn.textContent = '';
    if (!v) return;
    if (players.length >= MAX_PLAYERS) { el.setupWarn.textContent = MAX_PLAYERS + ' players is the maximum for a 90-minute session.'; return; }
    if (nameTaken(players, v)) { el.setupWarn.textContent = v + ' is already on the list \u2014 add a surname or initial.'; return; }
    players.push(v); el.nameInput.value = ''; renderSetup(); el.nameInput.focus();
  }
  el.addBtn.addEventListener('click', addPlayer);
  el.nameInput.addEventListener('keydown', function(e){ if(e.key==='Enter'){e.preventDefault();addPlayer();} });

  function setFinishDefault() {
    var d = new Date(Date.now() + SESSION_MIN*60000);
    var h = d.getHours(), m = d.getMinutes();
    el.finishTime.value = (h<10?'0':'')+h + ':' + (m<10?'0':'')+m;
  }
  function setMode(m) {
    mode = m;
    var manual = (m === "manual");
    el.modeManual.classList.toggle("on", manual);
    el.modeTimed.classList.toggle("on", !manual);
    el.manualBlock.classList.toggle("hidden", !manual);
    el.timedBlock.classList.toggle("hidden", manual);
    // shuffle defaults on for manual, off for timed
    if (el.shuffleOpt) el.shuffleOpt.checked = manual;
    renderSetup();
  }
  el.modeManual.addEventListener('click', function(){ setMode("manual"); });
  el.modeTimed.addEventListener('click', function(){ setMode("timed"); });

  el.roundsMinus.addEventListener('click', function(){
    if (manualRounds > 1) { manualRounds--; el.roundsVal.textContent = manualRounds; renderSetup(); }
  });
  el.roundsPlus.addEventListener('click', function(){
    if (manualRounds < 12) { manualRounds++; el.roundsVal.textContent = manualRounds; renderSetup(); }
  });

  el.plus90Btn.addEventListener('click', function(){ setFinishDefault(); renderSetup(); });
  el.finishTime.addEventListener('change', renderSetup);
  el.shuffleOpt.addEventListener('change', renderSetup);

  function parseFinishTime() {
    var v = el.finishTime.value;
    if (!v) return null;
    var parts = v.split(':');
    if (parts.length < 2) return null;
    var d = new Date();
    d.setHours(parseInt(parts[0],10), parseInt(parts[1],10), 0, 0);
    var t = d.getTime();
    if (t <= Date.now()) t += 24*3600*1000;   // finish time already passed today
    return t;
  }

  function availableMinutes() {
    var fin = parseFinishTime();
    if (!fin) return null;
    return Math.floor((fin - Date.now()) / 60000);
  }

  function renderPlan() {
    if (mode === "manual") {
      currentPlan = null;
      if (players.length < 4 || !selectedCourts.length) { el.planBox.classList.add('hidden'); return; }
      var courts = Math.min(selectedCourts.length, Math.floor(players.length/4));
      var sitting = players.length - courts*4;
      el.planBox.classList.remove('hidden');
      el.planHeadline.textContent = manualRounds + (manualRounds===1?' round':' rounds') +
        ' on ' + courts + ' court' + (courts!==1?'s':'');
      var d;
      if (sitting === 0) {
        d = 'Everyone plays every round \u2014 no one sits out.';
      } else {
        var slots = manualRounds * sitting;
        var base = Math.floor(slots / players.length);
        var rem = slots % players.length;
        if (rem === 0) {
          d = 'Each player sits out ' + base + (base===1?' round.':' rounds.');
        } else {
          d = rem + ' of ' + players.length + ' players sit out ' + (base+1) +
              (base+1===1?' round':' rounds') + ', the other ' + (players.length-rem) +
              ' sit out ' + base + (base===1?' round.':' rounds.');
        }
      }
      el.planDetail.textContent = d;
      var notes = [];
      if (selectedCourts.length > courts) {
        var spare = selectedCourts.length - courts;
        notes.push(spare + ' selected court' + (spare!==1?'s':'') + ' can\u2019t be used \u2014 ' +
          ((courts+1)*4) + ' players needed to fill ' + (courts+1) + '.');
      }
      notes.push('No timer in this mode \u2014 move on when the games finish.');
      el.planFlag.classList.remove('hidden');
      el.planFlag.textContent = notes.join(' ');
      return;
    }

    var avail = availableMinutes();
    var p = (players.length>=4 && selectedCourts.length && avail) ?
            makePlan(players.length, selectedCourts, avail) : null;
    currentPlan = p;
    if (!p) { el.planBox.classList.add('hidden'); return; }
    el.planBox.classList.remove('hidden');
    el.planHeadline.textContent = p.rounds + (p.rounds===1?' round of ':' rounds of ') +
      fmtMin(p.length) + ' minutes';
    var d2 = 'Using ' + p.courts + ' court' + (p.courts!==1?'s':'') + ' in the ' + avail +
            ' minutes left. ';
    if (p.sitting === 0) d2 += 'Everyone plays every round \u2014 no one sits out.';
    else d2 += p.sitting + ' player' + (p.sitting!==1?'s':'') + (p.sitting!==1?' sit':' sits') +
              ' out each round, ' + fmtMin(p.length) + ' min at a time.';
    d2 += ' Last round ends ' + clockStr(parseFinishTime()) + '.';
    el.planDetail.textContent = d2;

    var flags = [];
    if (selectedCourts.length > p.courts) {
      var spare2 = selectedCourts.length - p.courts;
      flags.push(spare2 + ' selected court' + (spare2!==1?'s':'') + ' can\u2019t be used \u2014 ' +
        ((p.courts+1)*4) + ' players needed to fill ' + (p.courts+1) + '.');
    }
    if (p.shaved) {
      flags.push('Late start \u2014 rounds trimmed to ' + fmtMin(p.length) +
                 ' min to fit them all in before ' + clockStr(parseFinishTime()) + '.');
    }
    if (p.uneven) {
      flags.push('Sit-outs don\u2019t divide evenly between ' + players.length +
        ' players: some sit out ' + p.maxBye + ' time' + (p.maxBye!==1?'s':'') +
        ', others ' + (p.maxBye-1) + '.');
    }
    if (flags.length) {
      el.planFlag.classList.remove('hidden');
      el.planFlag.textContent = flags.join(' ');
    } else el.planFlag.classList.add('hidden');
  }

  function renderSetup() {
    var usable = Math.min(selectedCourts.length, Math.floor(players.length/4));
    var txt = players.length + ' of ' + MAX_PLAYERS + ' player' + (players.length!==1?'s':'');
    if (players.length>=4 && selectedCourts.length>0) {
      txt += ' \u2022 ' + usable + ' court' + (usable!==1?'s':'') + ' in use \u2022 ' +
             (players.length - usable*4) + ' sitting out each round';
    }
    el.metaLine.textContent = txt;

    if (players.length===0) {
      el.playerList.innerHTML = '<div class="empty">No players yet \u2014 add your first one above.</div>';
    } else {
      var html = '';
      players.forEach(function(p,i){
        html += '<div class="player"><div class="player-left"><span class="badge">'+(i+1)+'</span>'+
                '<span class="player-name">'+esc(p)+'</span></div>'+
                '<button type="button" class="remove" data-idx="'+i+'">\u2715</button></div>';
      });
      el.playerList.innerHTML = html;
      Array.prototype.forEach.call(el.playerList.querySelectorAll('.remove'), function(btn){
        btn.addEventListener('click', function(){
          players.splice(parseInt(btn.getAttribute('data-idx'),10),1); renderSetup();
        });
      });
    }

    renderPlan();
    var avail = availableMinutes();
    var ready = (mode === "manual")
      ? (players.length>=4 && selectedCourts.length>0)
      : (players.length>=4 && selectedCourts.length>0 && avail!==null && avail>=HARD_FLOOR);
    el.startBtn.disabled = !ready;
    el.hintLine.style.display = ready ? 'none' : 'block';
    el.hintLine.textContent = players.length<4 ? 'Need at least 4 players to start.'
      : (selectedCourts.length===0 ? 'Pick at least one available court.'
      : (mode==="manual" ? ''
      : (avail===null ? 'Set the time you need to finish by.'
      : 'Only ' + avail + ' minutes left \u2014 not enough for a round.')));
  }

  // ---------- start / resume ----------
  el.startBtn.addEventListener('click', function(){
    activePlayers = players.slice();
    if (el.shuffleOpt && el.shuffleOpt.checked) {
      for (var i=activePlayers.length-1;i>0;i--) {
        var j = Math.floor(Math.random()*(i+1));
        var t = activePlayers[i]; activePlayers[i]=activePlayers[j]; activePlayers[j]=t;
      }
    }
    if (mode === "manual") {
      currentPlan = null;
      lockedRounds = manualRounds;
      lockedLength = 0;
      sessionStart = null;
    } else {
      currentPlan = makePlan(activePlayers.length, selectedCourts, availableMinutes());
      lockedRounds = currentPlan.rounds;
      lockedLength = currentPlan.length;
      sessionStart = Date.now();
    }
    rounds = buildRounds(activePlayers, selectedCourts, lockedRounds);
    roundIdx = (mode === "manual") ? 0 : liveRoundIdx();
    disarmAll();
    el.managePanel.classList.add('hidden');
    el.setupScreen.classList.add('hidden');
    el.fullScreen.classList.add('hidden');
    el.scheduleScreen.classList.remove('hidden');
    if (el.timerBar) el.timerBar.classList.toggle('hidden', mode === "manual");
    save(); requestWake();
    if (mode !== "manual") startTick();
    renderRound(); armBackGuard();
  });

  function offerResume() {
    var d = loadSaved();
    if (!d) return;
    pendingResume = d;
    el.resumeBox.classList.remove('hidden');
    if (d.mode === "manual") {
      el.resumeDetail.textContent = d.activePlayers.length + ' players, ' + d.rounds.length +
        ' rounds, no timer. You were on round ' + ((d.roundIdx||0)+1) + '.';
      return;
    }
    var endsAt = d.sessionStart + d.lockedRounds*d.lockedLength*60000;
    var live = Math.floor((Date.now()-d.sessionStart)/(d.lockedLength*60000));
    if (live < 0) live = 0;
    if (live > d.rounds.length-1) live = d.rounds.length-1;
    var over = Date.now() > endsAt;
    el.resumeDetail.textContent = d.activePlayers.length + ' players, started ' + clockStr(d.sessionStart) +
      ', ' + d.rounds.length + ' rounds. ' +
      (over ? 'That session has finished.' : 'Currently on round ' + (live+1) + ' of ' + d.rounds.length + '.');
  }
  el.resumeYes.addEventListener('click', function(){
    var d = pendingResume; if (!d) return;
    activePlayers = d.activePlayers; selectedCourts = d.selectedCourts;
    rounds = d.rounds; sessionStart = d.sessionStart;
    lockedRounds = d.lockedRounds; lockedLength = d.lockedLength;
    mode = d.mode || "timed";
    players = activePlayers.slice();
    roundIdx = (mode === "manual") ? (d.roundIdx || 0) : liveRoundIdx();
    if (el.timerBar) el.timerBar.classList.toggle('hidden', mode === "manual");
    el.resumeBox.classList.add('hidden');
    el.setupScreen.classList.add('hidden');
    el.scheduleScreen.classList.remove('hidden');
    requestWake();
    if (mode !== "manual") startTick();
    renderRound(); armBackGuard();
    toast('Session resumed');
  });
  el.resumeNo.addEventListener('click', function(){
    pendingResume = null; clearSaved(); el.resumeBox.classList.add('hidden');
  });

  el.backBtn.addEventListener('click', function(){
    if (!backArmed) {
      backArmed = true;
      el.backBtn.classList.add('armed');
      el.backBtn.textContent = 'Tap again to wipe this session';
      setTimeout(function(){
        backArmed=false; el.backBtn.classList.remove('armed');
        el.backBtn.textContent='Start over \u2014 clears this session';
      }, 4000);
      return;
    }
    backArmed = false;
    el.backBtn.classList.remove('armed');
    el.backBtn.textContent = 'Start over \u2014 clears this session';
    rounds = []; sessionStart = null; lockedRounds = 0; lockedLength = 0;
    clearSaved(); stopTick(); releaseWake();
    el.managePanel.classList.add('hidden');
    el.scheduleScreen.classList.add('hidden');
    el.fullScreen.classList.add('hidden');
    el.setupScreen.classList.remove('hidden');
    renderSetup();
  });

  // ---------- schedule rendering ----------
  function findDuplicates(round) {
    var seen = [], dupes = [];
    round.courts.forEach(function(c){ seen = seen.concat(c.top, c.bottom); });
    seen = seen.concat(round.byes);
    seen.forEach(function(nm){
      if (seen.filter(function(x){return x===nm;}).length>1 && dupes.indexOf(nm)===-1) dupes.push(nm);
    });
    return dupes;
  }

  function renderRound() {
    if (!rounds.length) return;
    var round = rounds[roundIdx];
    el.roundLabel.textContent = 'Round ' + (roundIdx+1) + ' of ' + rounds.length;
    el.roundBig.textContent = 'ROUND ' + (roundIdx+1);

    var dupes = findDuplicates(round);
    if (dupes.length) {
      el.integrityLine.classList.remove('hidden');
      el.integrityLine.textContent = 'Problem: ' + dupes.join(', ') + ' appear twice in this round. Use Shuffle to rebuild it.';
    } else el.integrityLine.classList.add('hidden');

    if (round.byes.length) {
      el.byesLine.classList.remove('hidden');
      el.byesLine.textContent = 'Sitting out: ' + round.byes.join(', ');
    } else el.byesLine.classList.add('hidden');

    var many = round.courts.length >= 3;
    var pairStyle = many ? ' style="font-size:20px"' : '';
    var html = '';
    round.courts.forEach(function(c){
      html += '<div class="court-card"><div class="court-head sb">COURT '+c.court+'</div>'+
        '<div class="court-body"><div class="pair"'+pairStyle+'>'+esc(c.top[0])+' &amp; '+esc(c.top[1])+'</div>'+
        '<div class="net-wrap"><span class="net-label">NET</span></div>'+
        '<div class="pair"'+pairStyle+'>'+esc(c.bottom[0])+' &amp; '+esc(c.bottom[1])+'</div></div></div>';
    });
    el.courtsWrap.innerHTML = html;

    el.prevBtn.disabled = roundIdx===0;
    el.nextBtn.disabled = roundIdx===rounds.length-1;
    paintClock();
    renderActiveList();
    save();
  }

  el.prevBtn.addEventListener('click', function(){ if(roundIdx>0){roundIdx--;disarmAll();renderRound();} });
  el.nextBtn.addEventListener('click', function(){ if(roundIdx<rounds.length-1){roundIdx++;disarmAll();renderRound();} });
  el.jumpBtn.addEventListener('click', function(){ roundIdx = liveRoundIdx(); disarmAll(); renderRound(); });

  // ---------- continuous session clock ----------
  function paintClock() {
    if (!sessionStart || !lockedLength) { el.timerClock.textContent = '--:--'; el.timerMeta.textContent=''; return; }
    var now = Date.now();
    var live = liveRoundIdx();
    var sessionEnd = sessionStart + lockedRounds*lockedLength*60000;

    if (now >= sessionEnd) {
      el.timerClock.classList.remove('over');
      el.timerClock.textContent = '\u2014';
      el.timerMeta.textContent = 'Scheduled end was ' + clockStr(sessionEnd) +
        '. Carry on if the courts are free.';
    } else {
      var endOfRound = roundEndMs(live);
      var remain = endOfRound - now;
      el.timerClock.classList.remove('over');
      el.timerClock.textContent = fmtHMS(remain);
      el.timerMeta.textContent = 'Round ' + (live+1) + ' ends ' + clockStr(endOfRound) +
        ' \u2022 session ends ' + clockStr(sessionEnd);
    }

    // "GO TO NOW" only when viewing a round that isn't the live one
    if (rounds.length && live !== roundIdx && now >= sessionStart && now < sessionEnd) {
      el.jumpBtn.classList.remove('hiddenish');
    } else {
      el.jumpBtn.classList.add('hiddenish');
    }
  }

  function fmtHMS(ms) {
    if (ms < 0) ms = 0;
    var mins = Math.floor(ms/60000), secs = Math.floor((ms%60000)/1000);
    return mins + ':' + (secs<10?'0':'') + secs;
  }

  function tick(){ paintClock(); }
  function startTick(){ stopTick(); tickHandle = setInterval(tick, 500); tick(); }
  function stopTick(){ if (tickHandle){ clearInterval(tickHandle); tickHandle=null; } }

  // ---------- wake lock (works when served over https, e.g. from Home Assistant) ----------
  function requestWake() {
    try {
      if (!navigator.wakeLock || !navigator.wakeLock.request) return;
      navigator.wakeLock.request('screen').then(function(s){
        wakeLock = s;
        s.addEventListener('release', function(){ wakeLock = null; });
      }).catch(function(){});
    } catch(e){}
  }
  function releaseWake(){ try { if (wakeLock) { wakeLock.release(); wakeLock=null; } } catch(e){} }
  document.addEventListener('visibilitychange', function(){
    if (document.visibilityState === 'visible') {
      if (rounds.length) { requestWake(); paintClock(); }
    }
  });

  // ---------- manage players ----------
  el.manageToggle.addEventListener('click', function(){
    var hidden = el.managePanel.classList.contains('hidden');
    el.managePanel.classList.toggle('hidden');
    if (hidden) pushView('manage'); else disarmAll();
  });

  function disarmAll() {
    armedGoneIdx = -1; shuffleArmed = false;
    if (armTimer){ clearTimeout(armTimer); armTimer=null; }
    el.shuffleBtn.classList.remove('armed');
    el.shuffleBtn.textContent = 'Shuffle remaining rounds';
    el.shuffleNote.textContent = 'Rounds already played stay as they were.';
    if (activePlayers.length) renderActiveList();
  }

  function rebuildFromCurrent() {
    var remaining = Math.max(1, lockedRounds - roundIdx);
    var history = rounds.slice(0, roundIdx);
    rounds = history.concat(buildRounds(activePlayers, selectedCourts, remaining));
    if (roundIdx >= rounds.length) roundIdx = Math.max(0, rounds.length-1);
  }

  function renderActiveList() {
    var html = '';
    activePlayers.forEach(function(p,i){
      var armed = (i===armedGoneIdx);
      html += '<div class="active-player"><span class="nm">'+esc(p)+'</span>'+
        (armed ? '<button type="button" class="cancel-btn" data-cancel="1">Cancel</button>' : '') +
        '<button type="button" class="gone-btn'+(armed?' armed':'')+'" data-idx="'+i+'">'+
        (armed?'TAP TO CONFIRM':'GONE HOME')+'</button></div>';
    });
    el.activePlayerList.innerHTML = html;

    Array.prototype.forEach.call(el.activePlayerList.querySelectorAll('.gone-btn'), function(btn){
      btn.addEventListener('click', function(){
        var idx = parseInt(btn.getAttribute('data-idx'),10), nm = activePlayers[idx];
        if (activePlayers.length-1 < 4) { el.manageWarn.textContent = "Can't remove " + nm + ' \u2014 4 players minimum.'; return; }
        el.manageWarn.textContent = '';
        if (armedGoneIdx !== idx) {
          armedGoneIdx = idx;
          if (armTimer) clearTimeout(armTimer);
          armTimer = setTimeout(function(){ armedGoneIdx=-1; renderActiveList(); }, 4000);
          renderActiveList(); return;
        }
        if (armTimer){ clearTimeout(armTimer); armTimer=null; }
        armedGoneIdx = -1;
        activePlayers.splice(idx,1);
        rebuildFromCurrent(); renderRound(); toast(nm + ' removed');
      });
    });
    Array.prototype.forEach.call(el.activePlayerList.querySelectorAll('[data-cancel]'), function(btn){
      btn.addEventListener('click', function(){
        armedGoneIdx = -1; if (armTimer){clearTimeout(armTimer);armTimer=null;} renderActiveList();
      });
    });
  }

  el.lateAddBtn.addEventListener('click', function(){
    var v = el.lateNameInput.value.trim();
    el.manageWarn.textContent = '';
    if (!v) return;
    if (activePlayers.length >= MAX_PLAYERS) { el.manageWarn.textContent = MAX_PLAYERS + ' players is the maximum.'; return; }
    if (nameTaken(activePlayers, v)) { el.manageWarn.textContent = v + ' is already playing \u2014 add a surname or initial.'; return; }
    activePlayers.push(v); el.lateNameInput.value = '';
    rebuildFromCurrent(); renderRound(); toast(v + ' added');
  });
  el.lateNameInput.addEventListener('keydown', function(e){ if(e.key==='Enter'){e.preventDefault();el.lateAddBtn.click();} });

  el.shuffleBtn.addEventListener('click', function(){
    if (!shuffleArmed) {
      shuffleArmed = true;
      el.shuffleBtn.classList.add('armed');
      el.shuffleBtn.textContent = 'Tap again to shuffle';
      el.shuffleNote.textContent = 'Rebuilds this round and all later ones.';
      if (armTimer) clearTimeout(armTimer);
      armTimer = setTimeout(function(){
        shuffleArmed=false; el.shuffleBtn.classList.remove('armed');
        el.shuffleBtn.textContent='Shuffle remaining rounds';
        el.shuffleNote.textContent='Rounds already played stay as they were.';
      }, 4000);
      return;
    }
    shuffleArmed = false;
    if (armTimer){ clearTimeout(armTimer); armTimer=null; }
    el.shuffleBtn.classList.remove('armed');
    el.shuffleBtn.textContent = 'Shuffle remaining rounds';
    el.shuffleNote.textContent = 'Rounds already played stay as they were.';
    var s = activePlayers.slice();
    for (var i=s.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=s[i]; s[i]=s[j]; s[j]=t; }
    activePlayers = s;
    rebuildFromCurrent(); renderRound(); toast('Rounds reshuffled');
  });

  // ---------- full schedule (screenshot failsafe) ----------
  function renderFull() {
    var manual = (mode === "manual");
    var sessionEnd = manual ? 0 : sessionStart + lockedRounds*lockedLength*60000;
    el.fullSub.textContent = manual
      ? activePlayers.length + ' players \u2022 ' + rounds.length + ' rounds \u2022 ' +
        selectedCourts.length + ' court' + (selectedCourts.length!==1?'s':'')
      : activePlayers.length + ' players \u2022 ' + rounds.length + ' rounds of ' +
        fmtMin(lockedLength) + ' min \u2022 ' + clockStr(sessionStart) + ' to ' + clockStr(sessionEnd);

    var live = manual ? roundIdx : liveRoundIdx();
    var html = '';
    rounds.forEach(function(r, i){
      var isLast = (i === rounds.length-1);
      var timeStr = manual ? '' : (clockStr(roundStartMs(i)) + ' \u2013 ' + clockStr(roundEndMs(i)));
      html += '<div class="fr'+(i===live?' fr-now':'')+(isLast&&!manual?' fr-optional':'')+'"><div class="fr-top">'+
        '<span class="fr-round">Round '+(i+1)+((isLast&&!manual)?' <span class="fr-tag">DROP IF SHORT</span>':'')+'</span>'+
        '<span class="fr-time">'+timeStr+'</span></div>';
      r.courts.forEach(function(c){
        html += '<div class="fr-line"><span class="fr-court">C'+c.court+'</span> '+
          esc(c.top[0])+' &amp; '+esc(c.top[1])+' <span class="fr-court">v</span> '+
          esc(c.bottom[0])+' &amp; '+esc(c.bottom[1])+'</div>';
      });
      if (r.byes.length) html += '<div class="fr-bye">Sitting out: '+esc(r.byes.join(', '))+'</div>';
      html += '</div>';
    });

    el.fullList.innerHTML = html;
  }

  el.addRoundBtn.addEventListener('click', function(){
    if (!rounds.length) return;
    // Build one extra round that continues the existing fairness accounting:
    // sit-outs stay balanced, partnerships keep varying, played rounds untouched.
    var extra = buildRounds(activePlayers, selectedCourts, 1, rounds);
    if (!extra.length) return;
    rounds = rounds.concat(extra);
    lockedRounds = rounds.length;
    if (mode !== "manual" && lockedLength) {
      // timed mode: the session simply runs longer than originally planned
      manualRounds = rounds.length;
    }
    renderRound();
    toast('Round ' + rounds.length + ' added');
  });

  el.fullBtn.addEventListener('click', function(){
    renderFull();
    el.scheduleScreen.classList.add('hidden');
    el.fullScreen.classList.remove('hidden');
    pushView('full');
  });
  el.fullBack.addEventListener('click', function(){
    el.fullScreen.classList.add('hidden');
    el.scheduleScreen.classList.remove('hidden');
    renderRound();
  });

  // ---------- hardware / gesture back button ----------
  // Push a history entry whenever a sub-view opens, so the phone's back
  // gesture closes that view instead of leaving the page entirely.
  function pushView(name) {
    try { history.pushState({view:name}, ''); } catch(e){}
  }

  function handleBack() {
    if (!el.helpScreen.classList.contains('hidden')) {
      el.helpScreen.classList.add('hidden');
      if (rounds.length) el.scheduleScreen.classList.remove('hidden');
      else el.setupScreen.classList.remove('hidden');
      return true;
    }
    // Priority: full schedule -> manage panel -> nothing (stay put)
    if (!el.fullScreen.classList.contains('hidden')) {
      el.fullScreen.classList.add('hidden');
      el.scheduleScreen.classList.remove('hidden');
      renderRound();
      return true;
    }
    if (!el.managePanel.classList.contains('hidden')) {
      el.managePanel.classList.add('hidden');
      disarmAll();
      return true;
    }
    return false;
  }

  window.addEventListener('popstate', function(){
    var handled = handleBack();
    // If a session is live, never let back leave the page: re-arm a history entry.
    if (rounds.length) {
      pushView('guard');
      if (!handled) toast('Session still running \u2014 use Manage players to end it');
    }
  });

  // Guard entry: as soon as a session starts, keep one spare history entry
  // so the first back gesture is always absorbed by the app.
  function armBackGuard() { pushView('session'); }

  // Warn before the tab/page is closed while a session is live.
  window.addEventListener('beforeunload', function(e){
    if (rounds.length) { e.preventDefault(); e.returnValue = ''; return ''; }
  });

  // ---------- help screen ----------
  var HELP_HTML =
    '<h3>Keep it on your phone</h3>' +
    '<p>Do this once and it opens like any other app, with no address bar \u2014 and it ' +
    'then works even with no signal at the courts.</p>' +
    '<div class="step"><b>Android</b><br/>Open in Chrome, tap the &#8942; menu (top right), ' +
    'then <b>Install</b>. If it offers both Install and Create shortcut, choose <b>Install</b>.</div>' +
    '<div class="step"><b>iPhone / iPad</b><br/>Open in <b>Safari</b> (not Chrome), tap the ' +
    'Share button, scroll down and tap <b>Add to Home Screen</b>.</div>' +

    '<h3>What this does</h3>' +
    '<p>Type in whoever turns up, tap which courts are free, and it works out ' +
    'who plays with whom, on which court, round by round. It keeps things fair ' +
    'so nobody is left sitting out more than anyone else.</p>' +

    '<h3>Running a session</h3>' +
    '<div class="step"><b>1.</b> Add each player\'s name and tap +</div>' +
    '<div class="step"><b>2.</b> Tap the courts you have today (1 to 4)</div>' +
    '<div class="step"><b>3.</b> Choose how many rounds, then tap Build Schedule</div>' +
    '<div class="step"><b>4.</b> Use Next after each round. Tap Full schedule any time ' +
    'to see the whole session on one screen.</div>' +

    '<h3>Limits</h3>' +
    '<ul>' +
    '<li>4 to 12 players</li>' +
    '<li>Up to 4 courts (each court needs 4 players, so 3 courts needs 12 people)</li>' +
    '<li>Any number of rounds, and you can add more later</li>' +
    '</ul>' +

    '<h3>How it keeps things fair</h3>' +
    '<p>The rule it never breaks: the difference between whoever sits out most and ' +
    'whoever sits out least is never more than one round. It also avoids anyone ' +
    'sitting out two rounds in a row, and gives you a different partner every round.</p>' +
    '<p>Where the numbers do not divide evenly it tells you the split before you start, ' +
    'so you can add a round if you would rather even it up. Ticking <em>shuffle</em> ' +
    'randomises the order first, so the first name typed is not always first to sit out.</p>' +

    '<h3>Two ways to run it</h3>' +
    '<p><b>Rounds</b> is the normal choice. Pick how many rounds and play at your own ' +
    'pace, with no clock and no countdown. Move on when the games finish.</p>' +
    '<p><b>Timed</b> is for when you must be off court at a set time. It works out how ' +
    'many rounds fit and shows a clock. Round times are fixed, so slow changeovers ' +
    'do not push the finish back.</p>' +

    '<h3>If someone arrives or leaves</h3>' +
    '<p>Tap <b>Manage players</b>. Rounds already played stay exactly as they were, and ' +
    'the remaining rounds are rebuilt around the change, still keeping sit-outs fair.</p>' +

    '<h3>Signal at the courts</h3>' +
    '<p>Once opened a single time with a connection, it stores itself on your phone and ' +
    'works from then on with no signal at all. When you are online it quietly updates ' +
    'itself in the background.</p>' +

    '<h3>If anything goes wrong</h3>' +
    '<ul>' +
    '<li>The schedule is saved as you go. Close the app or restart the phone and it ' +
    'offers to pick up where you left off.</li>' +
    '<li>Screenshot the Full schedule at the start. That works even if the phone dies.</li>' +
    '<li>Nothing is sent anywhere. Names stay on the phone that typed them.</li>' +
    '</ul>';

  el.helpBtn.addEventListener('click', function(){
    el.helpBody.innerHTML = HELP_HTML;
    el.setupScreen.classList.add('hidden');
    el.scheduleScreen.classList.add('hidden');
    el.fullScreen.classList.add('hidden');
    el.helpScreen.classList.remove('hidden');
    pushView('help');
  });
  el.helpBack.addEventListener('click', function(){
    el.helpScreen.classList.add('hidden');
    if (rounds.length) el.scheduleScreen.classList.remove('hidden');
    else el.setupScreen.classList.remove('hidden');
  });

  // ---------- boot ----------
  var vt = document.getElementById("verTag");
  if (vt) vt.textContent = APP_VERSION;
  var vt2 = document.getElementById("verTag2");
  if (vt2) vt2.textContent = "(" + APP_VERSION + ")";

  renderCourtToggles();
  setFinishDefault();
  el.roundsVal.textContent = manualRounds;
  setMode("manual");
  renderSetup();
  offerResume();
})();
