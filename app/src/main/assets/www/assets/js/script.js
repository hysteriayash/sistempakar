var app = new Vue({
  el: '#app',
  data: {
  //Input Objek Value
    name: '',
    submited: true,
    mulai: false,
    selesai: false,
    symtoms: [0,0,0,0,0,0,0,0,0,0,0],
    visible:
    {
    	0:false,
    	1:false,
    	2:false,
    	3:false,
    	4:false,
    	5:false,
    	6:false,
    	7:false,
    	8:false,
    	9:false,
    	10:false,

    },
    bobot: [0.8, 0.6, 0.4, 0.2, 0.4, 0.2, 0.4, 0.6, 0.4, 0.6, 0.6],
    cfCombine: 0,
    diagnostic: '',
    home: true,
    about: false,
    info: false,
  },

  //membuat function dari objek
  methods: {
    init: function () {
        this.name = '';
        this.submited = true;
        this.mulai = false;
        this.selesai = false;
        this.symtoms =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this.visible = {
            0:false,
            1:false,
            2:false,
            3:false,
            4:false,
            5:false,
            6:false,
            7:false,
            8:false,
            9:false,
            10:false
        };
        this.diagnostic = '';
        this.cfCombine = 0;
        $('#intro').alert('show');
    },

    goHome: function () {
        this.home = true;
        this.about = false;
        this.info = false;
        this.bantuan = false;

    },

    goInfo: function () {
        this.home = false;
        this.about = false;
        this.info = true;
        this.bantuan = false;

    },

    goAbout: function () {
        this.home = false;
        this.about = true;
        this.info = false;
        this.bantuan = false;

    },

    goBantuan: function () {
            this.home = false;
            this.about = false;
            this.info = false;
            this.bantuan = true;

        },

  	inputName: function () {
      		if (this.name != '') {
            $('#intro').alert('close');
            this.submited = false;
            this.mulai = true;
            this.visible[0] = true;
  		}else{
  			swal({
                title: "Oops!",
                text: "Anda harus memasukkan nama Anda",
                icon: "warning"
            })
  		}
  	},

  	inputWeight: function (index, nilai) {
  		this.symtoms[index] = nilai;
  		this.visible[index] = false;
  		if (index != 10) {
  			this.visible[index+1] = true;
  		}else if (index == 10){
            this.selesai = true;
            this.mulai = false;
            this.diagnosa()
        }
  	},

    diagnosa() {
        cf = [0,0,0,0,0,0,0,0,0,0,0];

        for (var i = 0; i < cf.length; i++) {
            cf[i] = this.bobot[i] * this.symtoms[i];

            if (i == 0) {
                this.cfCombine = this.cfCombine + cf[i];
            } else {
                this.cfCombine = (this.cfCombine + cf[i] * (1 - this.cfCombine));
            }
        }

        this.cfCombine = (Math.round(this.cfCombine * 10000) *100) / 10000;

        if (this.cfCombine >= 0 && this.cfCombine <= 50) {
            this.diagnostic = 'KEMUNGKINAN yang KECIL';
        } else if (this.cfCombine > 50 && this.cfCombine <= 79) {
            this.diagnostic = 'KEMUNGKINAN';
        } else if (this.cfCombine > 79 && this.cfCombine <= 99) {
            this.diagnostic = 'KEMUNGKINAN YANG BESAR';
        } else {
            this.diagnostic = 'SANGAT YAKIN';
        }
    },


  }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/hysteriayash.github.io/sw.js').then(function(registration){
            console.log('ServiceWorker registration successfully with scope: ', registration.scope);
        }, function(err){
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}