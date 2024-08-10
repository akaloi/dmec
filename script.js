// Pozisyon seçimine göre form gösterimi
function showForm() {
    const position = document.getElementById('position-select').value;
    
    // Tüm formları gizle
    document.getElementById('forensic-attendant-form').style.display = 'none';
    document.getElementById('coroner-investigator-form').style.display = 'none';
    document.getElementById('medical-examiner-form').style.display = 'none';

    // Seçilen pozisyona göre doğru formu göster
    if (position === 'Forensic Attendant') {
        document.getElementById('forensic-attendant-form').style.display = 'block';
    } else if (position === 'Coroner Investigator') {
        document.getElementById('coroner-investigator-form').style.display = 'block';
    } else if (position === 'Medical Examiner') {
        document.getElementById('medical-examiner-form').style.display = 'block';
    }
}

// Forensic Attendant BBCode oluşturma
function generateForensicAttendantBBCode() {
    const placeOfDeath = document.getElementById('fa-place-of-death').value;
    const department = document.getElementById('fa-department').value;
    const dateTime = document.getElementById('fa-date-time').value;
    const coronerName = document.getElementById('fa-coroner-name').value;
    const badgeNumber = document.getElementById('fa-badge-number').value;
    const deceasedName = document.getElementById('fa-deceased-name').value;
    const timeOfDeath = document.getElementById('fa-time-of-death').value;
    const summary = document.getElementById('fa-summary').value;
    const causeOfDeath = document.getElementById('fa-cause-of-death').value;
    const mannerOfDeath = document.getElementById('fa-manner-of-death').value;
    const fimgur = document.getElementById('fa-imgur').value;
    const fck = document.getElementById('details').value;
    const fck2 = document.getElementById('details2').value;
 
    const bbcode = `
[divbox=white][imgsize=150,150]https://i.imgur.com/jN2vZuO.png[/imgsize]
[aligntable=right,0,000,0,0,0,transparent][size=90]OPERATIONS DIVISION
DECEDENT SERVICES
[hr][/hr]
[/aligntable]

[center] ÖLÜM SORUŞTURMA RAPORU[/center]
[hr][/hr]

[center][b]A. YAZILI RAPOR[/b][/center]

[list=none][color=transparent]spacer[/color]
County Coroner's Office meydana gelen ölümle alakalı olarak [b]${placeOfDeath}[/b] konumuna çağrıldı. [b]${department}[/b] tarafından gelen çağrı üzerine Coroner's Office bir Forensic Attendant'ı [b]${dateTime}[/b] tarihinde olay yerinde soruşturma ve inceleme yapmak için gönderdi.

Forensic Attendant, [b]${coronerName}[/b], Rozet Numarası [b]${badgeNumber}[/b], olay yerine gelerek şahsın kimliğini tespit etti[b] ${deceasedName}[/b] adlı şahsın [b]${timeOfDeath}[/b] saatinde öldüğü açıklandı. İlk soruşturmanın ardından, Forensic Attendant bu özeti ortaya çıkardı [b]ÖZET[/b]: ${summary}

Olay yeri incelemesinden elde edilen bilgilere ve merhumun tıbbi geçmişine (varsa) dayanarak olası ölüm nedeninin [b]${causeOfDeath}[/b] olduğu belirlendi. Ölüm şekli [b]${mannerOfDeath}[/b] olarak sınıflandırıldı.[/list]

[list=none][color=transparent]spacer[/color][center][b]B. FOTOĞRAFLI BELGE KAYDI[/b][/center]

[spoiler=OLAY YERİ FOTOĞRAFLARI]
${fimgur}[/spoiler]

[divbox=transparent][center][color=Black][size=85][b][u](( OUT OF CHARACTER ))[/u][/b][/size][/center][/color][hr][/hr]
[size=75] Bu bölüm, oyuncunun CK mı yoksa PK mı olduğunu açıklığa kavuşturur.
Bu vakada oyuncu; ${fck}
[morgue screen, cinjuries, cdna linkleri: ${fck2}][/size][/divbox]

[center][b]C. BEYAN[/b][/center]

[divbox=transparent][center][color=Black][size=85]Bir Forensic Attendant olarak bulgularım ve sonuçlarımla ilgili ayrıntılı notlar aldım ve bu notlar gerektiğinde incelenmeye hazırdır. Ancak şunu belirtmeliyim ki, bu notlar herhangi bir kişisel görüş içermemektedir ve yalnızca elimde bulunan kanıt ve gerçeklere dayanmaktadır.

Sonuç olarak, bu raporun ajansın gerekli eylemlerde ilerlemesi için gerekli bilgileri sağlayacağını umuyorum. Daha fazla bilgiye ihtiyaç duyarsanız veya size daha fazla yardımcı olabilirsem lütfen bana bildirin.

Bu raporda yer alan bilgilerin bilgim ve inancım dahilinde doğru ve gerçek olduğunu onaylarım. Raporu inceledim ve içerdiği tüm bilgilerin tam ve doğru olduğundan emin oldum. [/size][/divbox]

[center][b]GİZLİLİK VE MAHREMİYET[/b][/center]

[divbox=transparent][center][color=Black][size=85]Department of Medical Examiner-Coroner'den alınan bu belge, içinde yer alan bilgilerin gerçekliğini tasdik eder. Bu bilgilerin izinsiz dağıtımı veya kullanımı, Sağlık Sigortası Taşınabilirlik ve Sorumluluk Yasası'nın (HIPAA) yanı sıra San Andreas Tıbbi Bilgilerin Gizliliği Yasası (CMIA) ve San Andreas Bilgi Uygulamaları Yasası (IPA) dahil ancak bunlarla sınırlı olmamak üzere eyalet ve federal gizlilik yasalarını ihlal eder. Bu belgeyi ele alan tüm tarafların merhumun ve ailesinin mahremiyetine ve gizliliğine saygı duyması zorunludur. Bu yasaların herhangi bir şekilde ihlali, sorumlu taraflara karşı yasal işlem başlatılmasıyla sonuçlanabilir. Ek bilgi veya açıklamaya ihtiyaç duyulursa lütfen Department of Medical Examiner-Coroner ile iletişime geçin.[/size][/divbox]`;

    document.getElementById('bbcode-output').value = bbcode.trim();
}

// Coroner Investigator BBCode oluşturma
function generateCoronerInvestigatorBBCode() {
    const infoSources = document.getElementById('ci-info-sources').value;
    const investigation = document.getElementById('ci-investigation').value;
    const location = document.getElementById('ci-location').value;
    const witnessStatements = document.getElementById('ci-witness-statements').value;
    const sceneDescription = document.getElementById('ci-scene-description').value;
    const evidence = document.getElementById('ci-evidence').value;
    const bodyDescription = document.getElementById('ci-body-description').value;
    const identification = document.getElementById('ci-identification').value;
    const nextOfKin = document.getElementById('ci-next-of-kin').value;
    const rankName = document.getElementById('ci-rank-name').value;

    const bbcode = `
[divbox=white][imgsize=170,170]https://i.imgur.com/CM9iDX4.png[/imgsize]
[aligntable=right,0,000,0,0,0,transparent][size=90]L.S. COUNTY DEPARTMENT OF MEDICAL EXAMINER-CORONER
DEATH INVESTIGATIONS UNIT
[hr][/hr]
[/aligntable]

[center] [b]CORONER INVESTIGATOR'S NARRATIVE[/b][/center]
[hr][/hr]

[b]Bilgi Kaynakları:[/b]
${infoSources}

[b]Soruşturma:[/b]
${investigation}

[b]Lokasyon:[/b]
${location}

[b]Bilgilendiricilerin/Tanıkların İfadeleri:[/b]
${witnessStatements}

[b]Olay Yeri Betimlemesi:[/b]
${sceneDescription}

[b]Deliller:[/b]
${evidence}

[b]Beden Betimlemesi:[/b]
${bodyDescription}

[b]Kimlik Tespiti:[/b]
${identification}

[b]En Yakın Akraba Bildirisi:[/b]
${nextOfKin}


${rankName}

[hr][/hr]
[center][b]GİZLİLİK VE MAHREMİYET[/b][/center]

[divbox=transparent][center][color=Black][size=85]Department of Medical Examiner-Coroner'den alınan bu belge, içinde yer alan bilgilerin gerçekliğini tasdik eder. Bu bilgilerin izinsiz dağıtımı veya kullanımı, Sağlık Sigortası Taşınabilirlik ve Sorumluluk Yasası'nın (HIPAA) yanı sıra San Andreas Tıbbi Bilgilerin Gizliliği Yasası (CMIA) ve San Andreas Bilgi Uygulamaları Yasası (IPA) dahil ancak bunlarla sınırlı olmamak üzere eyalet ve federal gizlilik yasalarını ihlal eder. Bu belgeyi ele alan tüm tarafların merhumun ve ailesinin mahremiyetine ve gizliliğine saygı duyması zorunludur. Bu yasaların herhangi bir şekilde ihlali, sorumlu taraflara karşı yasal işlem başlatılmasıyla sonuçlanabilir. Ek bilgi veya açıklamaya ihtiyaç duyulursa lütfen Department of Medical Examiner-Coroner ile iletişime geçin.[/size][/divbox]`;

    document.getElementById('bbcode-output').value = bbcode.trim();
}

// Coroner Investigator BBCode oluşturma
function generateMedicalExaminerBBCode() {
    const mname = document.getElementById('me-name').value;
    const mage = document.getElementById('me-age').value;
    const mgender = document.getElementById('me-gender').value;
    const methnicity = document.getElementById('me-ethnicity').value;
    const mdeath = document.getElementById('me-place-of-death').value;
    const mtime = document.getElementById('me-date-time-of-death').value;
    const mdis = document.getElementById('me-external-examination').value;
    const mhead = document.getElementById('me-head-examination').value;
    const magiz = document.getElementById('me-mouth-neck-examination').value;
    const mgovde = document.getElementById('me-chest-examination').value;
    const mabdo = document.getElementById('me-abdominal-examination').value;
    const mtanik = document.getElementById('me-autopsy-witnesses').value;
    const mgors = document.getElementById('me-conclusion').value;

    const bbcode = `
[divbox=white][imgsize=150,150]https://i.imgur.com/jN2vZuO.png[/imgsize]
[aligntable=right,0,000,0,0,0,transparent][size=90]FORENSIC MEDICINE DIVISION
DEATH INVESTIGATION UNIT
[hr][/hr]
[/aligntable]

[center] OTOPSİ RAPORU[/center]
[hr][/hr]

[center][b]A. MERHUM BİLGİLERİ[/b][/center]

[b]Ad ve Soyad:[/b] ${mname}
[b]Yaş:[/b ]${mage}
[b]Cinsiyet:[/b] ${mgender}
[b]Etnik Köken:[/b] ${methnicity}
[b]Ölüm Yeri:[/b] ${mdeath}
[b]Ölüm Tarihi/Saati:[/b] ${mtime}

[hr][/hr]
[color=transparent]spacer[/color][center][b]B. OTOPSİ SEYRİ[/b][/center]

[b]Dış Muayene:[/b]
${mdis}

[b]Baş Muayenesi:[/b]
${mhead}

[b]Ağız-Boğaz-Boyun Muayenesi:[/b]
${magiz}

[b]Göğüs Muayenesi:[/b]
${mgovde}

[b]Batın Muayenesi:[/b]
${mabdo}

[b]Otopsi Tanıkları:[/b]
${mtanik}

[hr][/hr]

[center][b]C. SONUÇ VE GÖRÜŞ[/b][/center]
${mgors}




[hr][/hr]
[center][b]D. GİZLİLİK VE MAHREMİYET[/b][/center]

[divbox=transparent][center][color=Black][size=85]Department of Medical Examiner-Coroner'den alınan bu belge, içinde yer alan bilgilerin gerçekliğini tasdik eder. Bu bilgilerin izinsiz dağıtımı veya kullanımı, Sağlık Sigortası Taşınabilirlik ve Sorumluluk Yasası'nın (HIPAA) yanı sıra San Andreas Tıbbi Bilgilerin Gizliliği Yasası (CMIA) ve San Andreas Tıbbi Bilgilerin Gizliliği Yasası (CMIA) dahil ancak bunlarla sınırlı olmamak üzere eyalet ve federal gizlilik yasalarını ihlal eder. San Andreas Bilgi Uygulamaları Yasası (IPA).

Bu belgeyi ele alan tüm tarafların merhumun ve ailesinin mahremiyetine ve gizliliğine saygı duyması zorunludur. Bu yasaların herhangi bir şekilde ihlali, sorumlu taraflara karşı yasal işlem başlatılmasıyla sonuçlanabilir.

 Ek bilgi veya açıklamaya ihtiyaç duyulursa lütfen Department of Medical Examiner-Coroner ile iletişime geçin.[/size][/divbox]
 `;

    document.getElementById('bbcode-output').value = bbcode.trim();
}



