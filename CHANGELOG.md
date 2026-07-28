# Changelog

## 2.0.0-rc1 — 2026-07-29

### Added

- رابط سه‌زبانه فارسی، آلمانی و انگلیسی با تغییر خودکار RTL/LTR
- پروفایل زبان‌آموز، سطح فعلی/هدف، رشته تخصصی و اهداف دانشگاهی/شغلی
- برنامه مطالعه هفتگی شخصی‌سازی‌شده و خلاصه پروفایل در داشبورد
- پشتیبان کامل JSON، Import با محدودیت ۲ مگابایت و پاک‌سازی ساختاری داده
- بخش About با اطلاعات سازنده، ذخیره محلی و Disclaimer
- آیکون‌های PNG استاندارد ۱۹۲، ۵۱۲ و Maskable
- صفحه Offline، اعلان وضعیت اتصال و اعلان نسخه جدید Service Worker
- اطلاعات بررسی‌شده ۲۰۲۶ درباره برنامه‌های منتخب دانشگاه ماربورگ و EudraLex Volume 4

### Changed

- اصلاح Responsive برای عرض‌های ۳۲۰ تا ۱۴۴۰ پیکسل
- حذف Overflow افقی در نمای ۱۰۲۴ پیکسل
- ارتقای Manifest، Service Worker، Cache Versioning و GitHub Pages Subpath support
- نسخه مخزن با Loader قطعه‌بندی‌شده و Hash قابل کنترل منتشر می‌شود

### Security

- حذف احتمال درج Secret در سورس
- Escape داده‌های ورودی نمایشی
- اعتبارسنجی Backup Import و محدودسازی طول/تعداد رکوردها
- تأیید صریح پیش از حذف کامل داده‌ها

### Validation

- Syntax JavaScript و Service Worker: PASS
- ۱۰ Route در هشت Viewport: PASS
- Console/Page errors: صفر
- Horizontal overflow: صفر
- Duplicate DOM IDs: صفر
- کنترل خودکار Label، نام دکمه، Alt و Tap Target: PASS heuristic

### Pending before Final

- GitHub Pages Production acceptance
- Android real-device installation/offline acceptance
- iPhone Safari/Add to Home Screen acceptance
- Full independent native-language review
- Formal WCAG conformance audit
