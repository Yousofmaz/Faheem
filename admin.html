<?php
session_start();

// كلمة المرور الخاصة بلوحة التحكم (يمكنك تغييرها هنا)
$admin_password = "admin123"; 
$error = "";
$success_msg = "";
$generated_link = "";
$whatsapp_link = "";

// التعامل مع تسجيل الدخول
if (isset($_POST['login'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['admin_logged'] = true;
    } else {
        $error = "كلمة المرور غير صحيحة!";
    }
}

// تسجيل الخروج
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: admin.php");
    exit;
}

// معالجة إضافة تقرير جديد
if (isset($_SESSION['admin_logged']) && $_SESSION['admin_logged'] === true && isset($_POST['save_report'])) {
    $report_code = "SPEC-" . rand(1000, 9999);
    $car_name    = trim($_POST['car_name']);
    $car_model   = trim($_POST['car_model']);
    $plate_no    = trim($_POST['plate_no']);
    $mileage     = trim($_POST['mileage']);
    $customer_phone = trim($_POST['customer_phone']);
    $engine      = $_POST['engine'];
    $transmission = $_POST['transmission'];
    $chassis     = $_POST['chassis'];
    $electrical  = $_POST['electrical'];
    $body_notes  = trim($_POST['body_notes']);
    $general_notes = trim($_POST['general_notes']);
    $date        = date('Y-m-d H:i');

    $report_data = [
        'report_code'   => $report_code,
        'car_name'      => $car_name,
        'car_model'     => $car_model,
        'plate_no'      => $plate_no,
        'mileage'       => $mileage,
        'customer_phone'=> $customer_phone,
        'engine'        => $engine,
        'transmission'  => $transmission,
        'chassis'       => $chassis,
        'electrical'    => $electrical,
        'body_notes'    => $body_notes,
        'general_notes' => $general_notes,
        'date'          => $date
    ];

    $file = 'reports.json';
    $reports = [];
    if (file_exists($file)) {
        $reports = json_decode(file_get_contents($file), true) ?: [];
    }

    // حفظ التقرير بمفتاح كود الفحص
    $reports[$report_code] = $report_data;
    file_put_contents($file, json_encode($reports, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

    // بناء روابط المشاركة والواتساب
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
    $host = $_SERVER['HTTP_HOST'];
    $path = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    $generated_link = "{$protocol}://{$host}{$path}/index.php?search_code={$report_code}";
    
    // رسالة الواتساب الجاهزة للإرسال
    $wa_msg = urlencode("عميلنا العزيز، تم الانتهاء من فحص سيارتك ({$car_name}) في مركز المتخصص فاحص. يمكنك الاطلاع على التقرير المفصل عبر الرابط التالي:\n{$generated_link}");
    $whatsapp_link = "https://wa.me/{$customer_phone}?text={$wa_msg}";

    $success_msg = "تم إنشاء التقرير بنجاح وتوليد الرابط الخاص به!";
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة التحكم | مركز المتخصص فاحص</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
        body { font-family: 'Cairo', sans-serif; background-color: #0b0f19; color: #f3f4f6; }
        .gold-text { color: #d4af37; }
        .gold-border { border-color: #d4af37; }
        .gold-bg { background-color: #d4af37; }
        .gold-bg:hover { background-color: #c5a028; }
        .card-bg { background: rgba(17, 24, 39, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(212, 175, 55, 0.2); }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between">

    <!-- رأس لوحة التحكم -->
    <header class="card-bg border-b border-gray-800 py-4 px-6">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg gold-bg flex items-center justify-center text-black font-black text-xl shadow-lg">
                    <i class="fa-solid fa-user-shield"></i>
                </div>
                <div>
                    <h1 class="text-xl font-bold tracking-wider gold-text">لوحة إدارة الموظفين</h1>
                    <p class="text-xs text-gray-400">مركز المتخصص فاحص</p>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <a href="index.php" class="text-xs text-gray-400 hover:text-white transition"><i class="fa-solid fa-globe ml-1"></i> زيارة الموقع</a>
                <?php if(isset($_SESSION['admin_logged']) && $_SESSION['admin_logged'] === true): ?>
                    <a href="admin.php?logout=1" class="text-xs text-red-400 hover:text-red-300 transition border border-red-500/20 px-3 py-1.5 rounded-lg"><i class="fa-solid fa-right-from-bracket ml-1"></i> خروج</a>
                <?php endif; ?>
            </div>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8 flex-grow w-full">
        
        <?php if(!isset($_SESSION['admin_logged']) || $_SESSION['admin_logged'] !== true): ?>
            <!-- نموذج تسجيل الدخول -->
            <div class="max-w-md mx-auto card-bg p-8 rounded-2xl shadow-2xl mt-12">
                <div class="text-center mb-6">
                    <div class="w-16 h-16 bg-yellow-500/10 border border-yellow-500/20 text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <h2 class="text-2xl font-bold">تسجيل دخول الموظفين</h2>
                    <p class="text-xs text-gray-400 mt-1">أدخل كلمة المرور الخاصة باللوحة للوصول لنظام التقارير</p>
                </div>

                <form method="POST" action="">
                    <div class="mb-4">
                        <label class="block text-xs text-gray-400 mb-2">كلمة المرور</label>
                        <input type="password" name="password" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]" placeholder="••••••••">
                    </div>
                    <?php if(!empty($error)): ?>
                        <div class="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center">
                            <?php echo $error; ?>
                        </div>
                    <?php endif; ?>
                    <button type="submit" name="login" class="w-full gold-bg text-black font-bold py-3 rounded-xl transition">دخول لوحة التحكم</button>
                </form>
            </div>

        <?php else: ?>
            <!-- لوحة إدخال وتوليد التقارير -->
            <div class="mb-8">
                <h2 class="text-2xl font-black mb-1">إصدار تقرير فحص جديد</h2>
                <p class="text-xs text-gray-400">قم بتعبئة حقول الفحص أدناه، وسيتولد رابط مخصص للعميل فوراً.</p>
            </div>

            <?php if(!empty($success_msg)): ?>
                <div class="card-bg p-6 rounded-2xl border border-green-500/30 mb-8 bg-green-500/5">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-green-400"><?php echo $success_msg; ?></h3>
                            <p class="text-xs text-gray-400">تم حفظ التقرير بنجاح في النظام.</p>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div>
                            <label class="text-xs text-gray-400 block mb-1">رابط التقرير المباشر:</label>
                            <div class="flex gap-2">
                                <input type="text" readonly value="<?php echo $generated_link; ?>" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 text-xs text-yellow-400 font-mono" id="reportLink">
                                <button onclick="navigator.clipboard.writeText(document.getElementById('reportLink').value); alert('تم نسخ الرابط بنجاح!');" class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl text-xs transition whitespace-nowrap">
                                    <i class="fa-solid fa-copy ml-1"></i> نسخ الرابط
                                </button>
                            </div>
                        </div>

                        <div class="pt-2">
                            <a href="<?php echo $whatsapp_link; ?>" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition flex items-center justify-center gap-2">
                                <i class="fa-brands fa-whatsapp text-lg"></i> إرسال التقرير للعميل عبر الواتساب فوراً
                            </a>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            <form method="POST" action="" class="card-bg p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
                <!-- معلومات السيارة والعميل -->
                <div>
                    <h3 class="text-sm font-bold gold-text mb-3 pb-2 border-b border-gray-800"><i class="fa-solid fa-car ml-1"></i> بيانات السيارة والعميل</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">اسم السيارة والنوع (مثال: تويوتا كامري)</label>
                            <input type="text" name="car_name" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="أدخل اسم السيارة">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">موديل السيارة / السنة</label>
                            <input type="text" name="car_model" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="مثال: 2024">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">رقم اللوحة</label>
                            <input type="text" name="plate_no" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="أ ب ج 1234">
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">المسافة المقطوعة (كم)</label>
                            <input type="text" name="mileage" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="مثال: 45,000">
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block text-xs text-gray-400 mb-1">رقم جوال العميل (متبوعاً برمز الدولة بدون علامة +)</label>
                            <input type="text" name="customer_phone" required class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="مثال: 966500000000">
                        </div>
                    </div>
                </div>

                <!-- نتائج الفحص الأساسي -->
                <div>
                    <h3 class="text-sm font-bold gold-text mb-3 pb-2 border-b border-gray-800"><i class="fa-solid fa-list-check ml-1"></i> نتائج فحص الأقسام</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">المحرك (Engine)</label>
                            <select name="engine" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]">
                                <option value="سليم">سليم</option>
                                <option value="يحتاج صيانة">يحتاج صيانة</option>
                                <option value="به ملاحظات">به ملاحظات</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">القير (Transmission)</label>
                            <select name="transmission" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]">
                                <option value="سليم">سليم</option>
                                <option value="يحتاج صيانة">يحتاج صيانة</option>
                                <option value="به ملاحظات">به ملاحظات</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">الشاصي والأواصر (Chassis)</label>
                            <select name="chassis" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]">
                                <option value="سليم">سليم</option>
                                <option value="مضروب / تعديل">مضروب / تعديل</option>
                                <option value="به ملاحظات">به ملاحظات</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">البطارية والكهرباء (Electrical)</label>
                            <select name="electrical" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]">
                                <option value="سليم">سليم</option>
                                <option value="يحتاج صيانة">يحتاج صيانة</option>
                                <option value="به ملاحظات">به ملاحظات</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- الملاحظات والتقارير التفصيلية -->
                <div>
                    <h3 class="text-sm font-bold gold-text mb-3 pb-2 border-b border-gray-800"><i class="fa-solid fa-pen-to-square ml-1"></i> الملاحظات التفصيلية</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">ملاحظات البودري / الهيكل الخارجي</label>
                            <textarea name="body_notes" rows="2" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="اكتب حالة البدي (رش، صدمات خفيفة، سمكره)..."></textarea>
                        </div>
                        <div>
                            <label class="block text-xs text-gray-400 mb-1">التقرير العام والتوصيات الفنية</label>
                            <textarea name="general_notes" rows="3" class="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]" placeholder="اكتب التقييم النهائي والتوصيات للمشتري..."></textarea>
                        </div>
                    </div>
                </div>

                <button type="submit" name="save_report" class="w-full gold-bg text-black font-black py-3.5 rounded-xl transition shadow-lg text-base">
                    <i class="fa-solid fa-circle-plus ml-1"></i> إصدار وتوليد رابط التقرير للعميل
                </button>
            </form>
        <?php endif; ?>

    </main>

    <footer class="bg-gray-950 border-t border-gray-900 py-6 text-center text-xs text-gray-500">
        <p>لوحة تحكم مركز المتخصص فاحص © 2026</p>
    </footer>

</body>
</html>
