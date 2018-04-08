var bootLog = ["[    0.000000] Linux version 3.13.0-85-generic (buildd@lgw01-32)", "[    0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz-3.13.0-85-generic root=UUID=540a8g54-34a5-9376-a08e-ea6nd52js15a ro", "[    0.000000] KERNEL supported cpus:", "[    0.000000]   Intel GenuineIntel", "[    0.000000]   AMD AuthenticAMD", "[    0.000000]   Centaur CentaurHauls", "[    0.000000] e820: BIOS-provided physical RAM map:", "[    0.000000] BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable", "[    0.000000] BIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved", "[    0.000000] BIOS-e820: [mem 0x00000000000f0000-0x00000000000fffff] reserved", "[    0.000000] BIOS-e820: [mem 0x0000000000100000-0x000000001fffdfff] usable", "[    0.000000] BIOS-e820: [mem 0x000000001fffe000-0x000000001fffffff] reserved", "[    0.000000] BIOS-e820: [mem 0x00000000feffc000-0x00000000feffffff] reserved", "[    0.000000] BIOS-e820: [mem 0x00000000fffc0000-0x00000000ffffffff] reserved", "[    0.000000] NX (Execute Disable) protection: active", "[    0.000000] SMBIOS 2.4 present.", "[    0.000000] DMI: DigitalOcean Droplet, BIOS 20160425 04/25/2016", "[    0.000000] Hypervisor detected: KVM", "[    0.000000] e820: update [mem 0x00000000-0x00000fff] usable ==> reserved", "[    0.000000] e820: remove [mem 0x000a0000-0x000fffff] usable", "[    0.000000] No AGP bridge found", "[    0.000000] e820: last_pfn = 0x1fffe max_arch_pfn = 0x400000000", "[    0.000000] MTRR default type: write-back", "[    0.000000] MTRR fixed ranges enabled:", "[    0.000000]   00000-9FFFF write-back", "[    0.000000]   A0000-BFFFF uncachable", "[    0.000000]   C0000-FFFFF write-protect", "[    0.000000] MTRR variable ranges enabled:", "[    0.000000]   0 base 0080000000 mask FF80000000 uncachable", "[    0.000000]   1 disabled", "[    0.000000]   2 disabled", "[    0.000000]   3 disabled", "[    0.000000]   4 disabled", "[    0.000000]   5 disabled", "[    0.000000]   6 disabled", "[    0.000000]   7 disabled", "[    0.000000] x86 PAT enabled: cpu 0, old 0x7040600070406, new 0x7010600070106", "[    0.000000] found SMP MP-table at [mem 0x000f1a70-0x000f1a7f] mapped at [ffff8800000f1a70]", "[    0.000000] Scanning 1 areas for low memory corruption", "[    0.000000] Base memory trampoline at [ffff880000099000] 99000 size 24576", "[    0.000000] Using GB pages for direct mapping", "[    0.000000] init_memory_mapping: [mem 0x00000000-0x000fffff]", "[    0.000000]  [mem 0x00000000-0x000fffff] page 4k", "[    0.000000] BRK [0x01fe2000, 0x01fe2fff] PGTABLE", "[    0.000000] BRK [0x01fe3000, 0x01fe3fff] PGTABLE", "[    0.000000] BRK [0x01fe4000, 0x01fe4fff] PGTABLE", "[    0.000000] init_memory_mapping: [mem 0x1fc00000-0x1fdfffff]", "[    0.000000]  [mem 0x1fc00000-0x1fdfffff] page 2M", "[    0.000000] init_memory_mapping: [mem 0x1c000000-0x1fbfffff]", "[    0.000000]  [mem 0x1c000000-0x1fbfffff] page 2M", "[    0.000000] init_memory_mapping: [mem 0x00100000-0x1bffffff]", "[    0.000000]  [mem 0x00100000-0x001fffff] page 4k", "[    0.000000]  [mem 0x00200000-0x1bffffff] page 2M", "[    0.000000] init_memory_mapping: [mem 0x1fe00000-0x1fffdfff]", "[    0.000000]  [mem 0x1fe00000-0x1fffdfff] page 4k", "[    0.000000] BRK [0x01fe5000, 0x01fe5fff] PGTABLE", "[    0.000000] RAMDISK: [mem 0x1e2e7000-0x1f55ffff]", "[    0.000000] ACPI: RSDP 00000000000f18d0 000014 (v00 BOCHS )", "[    0.000000] ACPI: RSDT 000000001fffe450 000034 (v01 BOCHS  BXPCRSDT 00000001 BXPC 00000001)", "[    0.000000] ACPI: FACP 000000001fffff80 000074 (v01 BOCHS  BXPCFACP 00000001 BXPC 00000001)", "[    0.000000] ACPI: DSDT 000000001fffe490 001137 (v01 BOCHS  BXPCDSDT 00000001 BXPC 00000001)", "[    0.000000] ACPI: FACS 000000001fffff40 000040", "[    0.000000] ACPI: SSDT 000000001ffff700 000838 (v01 BOCHS  BXPCSSDT 00000001 BXPC 00000001)", "[    0.000000] ACPI: APIC 000000001ffff610 000078 (v01 BOCHS  BXPCAPIC 00000001 BXPC 00000001)", "[    0.000000] ACPI: HPET 000000001ffff5d0 000038 (v01 BOCHS  BXPCHPET 00000001 BXPC 00000001)", "[    0.000000] ACPI: Local APIC address 0xfee00000", "[    0.000000] No NUMA configuration found", "[    0.000000] Faking a node at [mem 0x0000000000000000-0x000000001fffdfff]", "[    0.000000] Initmem setup node 0 [mem 0x00000000-0x1fffdfff]", "[    0.000000]   NODE_DATA [mem 0x1fff9000-0x1fffdfff]", "[    0.000000] kvm-clock: Using msrs 4b564d01 and 4b564d00", "[    0.000000] kvm-clock: cpu 0, msr 0:1fff5001, boot clock", "[    0.000000]  [ffffea0000000000-ffffea00007fffff] PMD -> [ffff88001da00000-ffff88001e1fffff] on node 0", "[    0.000000] Zone ranges:", "[    0.000000]   DMA      [mem 0x00001000-0x00ffffff]", "[    0.000000]   DMA32    [mem 0x01000000-0xffffffff]", "[    0.000000]   Normal   empty", "[    0.000000] Movable zone start for each node", "[    0.000000] Early memory node ranges", "[    0.000000]   node   0: [mem 0x00001000-0x0009efff]", "[    0.000000]   node   0: [mem 0x00100000-0x1fffdfff]", "[    0.000000] On node 0 totalpages: 130972", "[    0.000000]   DMA zone: 64 pages used for memmap", "[    0.000000]   DMA zone: 21 pages reserved", "[    0.000000]   DMA zone: 3998 pages, LIFO batch:0", "[    0.000000]   DMA32 zone: 1984 pages used for memmap", "[    0.000000]   DMA32 zone: 126974 pages, LIFO batch:31", "[    0.000000] ACPI: PM-Timer IO Port: 0xb008", "[    0.000000] ACPI: Local APIC address 0xfee00000", "[    0.000000] ACPI: LAPIC (acpi_id[0x00] lapic_id[0x00] enabled)", "[    0.000000] ACPI: LAPIC_NMI (acpi_id[0xff] dfl dfl lint[0x1])", "[    0.000000] ACPI: IOAPIC (id[0x00] address[0xfec00000] gsi_base[0])", "[    0.000000] IOAPIC[0]: apic_id 0, version 17, address 0xfec00000, GSI 0-23", "[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)", "[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 5 global_irq 5 high level)", "[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)", "[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 10 global_irq 10 high level)", "[    0.000000] ACPI: INT_SRC_OVR (bus 0 bus_irq 11 global_irq 11 high level)", "[    0.000000] ACPI: IRQ0 used by override.", "[    0.000000] ACPI: IRQ2 used by override.", "[    0.000000] ACPI: IRQ5 used by override.", "[    0.000000] ACPI: IRQ9 used by override.", "[    0.000000] ACPI: IRQ10 used by override.", "[    0.000000] ACPI: IRQ11 used by override.", "[    0.000000] Using ACPI (MADT) for SMP configuration information", "[    0.000000] ACPI: HPET id: 0x8086a201 base: 0xfed00000", "[    0.000000] smpboot: Allowing 1 CPUs, 0 hotplug CPUs", "[    0.000000] nr_irqs_gsi: 40", "[    0.000000] PM: Registered nosave memory: [mem 0x0009f000-0x0009ffff]", "[    0.000000] PM: Registered nosave memory: [mem 0x000a0000-0x000effff]", "[    0.000000] PM: Registered nosave memory: [mem 0x000f0000-0x000fffff]", "[    0.000000] e820: [mem 0x20000000-0xfeffbfff] available for PCI devices", "[    0.000000] Booting paravirtualized kernel on KVM", "[    0.000000] setup_percpu: NR_CPUS:256 nr_cpumask_bits:256 nr_cpu_ids:1 nr_node_ids:1", "[    0.000000] PERCPU: Embedded 27 pages/cpu @ffff88001fc00000 s81536 r8192 d20864 u2097152", "[    0.000000] pcpu-alloc: s81536 r8192 d20864 u2097152 alloc=1*2097152", "[    0.000000] pcpu-alloc: [0] 0", "[    0.000000] kvm-clock: cpu 0, msr 0:1fff5001, primary cpu clock", "[    0.000000] KVM setup async PF for cpu 0", "[    0.000000] kvm-stealtime: cpu 0, msr 1fc0d000", "[    0.000000] Built 1 zonelists in Node order, mobility grouping on.  Total pages: 128903", "[    0.000000] Policy zone: DMA32", "[    0.000000] Kernel command line: BOOT_IMAGE=/boot/vmlinuz-3.13.0-85-generic root=UUID=050e1e34-39e6-4072-a03e-ae0bf90ba13a ro", "[    0.000000] PID hash table entries: 2048 (order: 2, 16384 bytes)", "[    0.000000] xsave: enabled xstate_bv 0x7, cntxt size 0x340", "[    0.000000] Checking aperture...", "[    0.000000] No AGP bridge found", "[    0.000000] Calgary: detecting Calgary via BIOS EBDA area", "[    0.000000] Calgary: Unable to locate Rio Grande table in EBDA - bailing!", "[    0.000000] Memory: 480028K/523888K available (7426K kernel code, 1146K rwdata, 3416K rodata, 1336K init, 1448K bss, 43860K reserved)", "[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1", "[    0.000000] Hierarchical RCU implementation.", "[    0.000000] tRCU dyntick-idle grace-period acceleration is enabled.", "[    0.000000] tRCU restricting CPUs from NR_CPUS=256 to nr_cpu_ids=1.", "[    0.000000] tOffload RCU callbacks from all CPUs", "[    0.000000] tOffload RCU callbacks from CPUs: 0.", "[    0.000000] NR_IRQS:16640 nr_irqs:256 16", "[    0.000000] Console: colour dummy device 80x25", "[    0.000000] console [tty0] enabled", "[    0.000000] allocated 2097152 bytes of page_cgroup", "[    0.000000] please try 'cgroup_disable=memory' option if you don't want memory cgroups", "[    0.000000] hpet clockevent registered", "[    0.000000] tsc: Detected 1799.998 MHz processor", "[    0.008000] Calibrating delay loop (skipped) preset value.. 3599.99 BogoMIPS (lpj=7199992)", "[    0.008000] pid_max: default: 32768 minimum: 301", "[    0.008000] Security Framework initialized", "[    0.008000] AppArmor: AppArmor initialized", "[    0.008000] Yama: becoming mindful.", "[    0.008000] Dentry cache hash table entries: 65536 (order: 7, 524288 bytes)", "[    0.008000] Inode-cache hash table entries: 32768 (order: 6, 262144 bytes)", "[    0.008000] Mount-cache hash table entries: 1024 (order: 1, 8192 bytes)", "[    0.008000] Mountpoint-cache hash table entries: 1024 (order: 1, 8192 bytes)", "[    0.008000] Initializing cgroup subsys memory", "[    0.008000] Initializing cgroup subsys devices", "[    0.008000] Initializing cgroup subsys freezer", "[    0.008000] Initializing cgroup subsys blkio", "[    0.008000] Initializing cgroup subsys perf_event", "[    0.008000] Initializing cgroup subsys hugetlb", "[    0.008000] mce: CPU supports 10 MCE banks", "[    0.008000] Last level iTLB entries: 4KB 0, 2MB 0, 4MB 0", "[    0.008000] Last level dTLB entries: 4KB 64, 2MB 0, 4MB 0", "[    0.008000] tlb_flushall_shift: 6", "[    0.024857] Freeing SMP alternatives memory: 32K (ffffffff81e6e000 - ffffffff81e76000)", "[    0.028866] ACPI: Core revision 20131115", "[    0.029563] ACPI: All ACPI Tables successfully acquired", "[    0.029604] ftrace: allocating 28612 entries in 112 pages", "[    0.040324] Enabling x2apic", "[    0.040334] Enabled x2apic", "[    0.040550] Switched APIC routing to physical x2apic.", "[    0.041759] ..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1", "[    0.041762] smpboot: CPU0: Intel(R) Xeon(R) CPU E5-2650L v3 @ 1.80GHz (fam: 06, model: 3f, stepping: 02)", "[    0.041796] TSC deadline timer enabled", "[    0.041825] Performance Events: 16-deep LBR, Haswell events, Intel PMU driver.", "[    0.044032] ... version:                2", "[    0.044035] ... bit width:              48", "[    0.044037] ... generic registers:      4", "[    0.044039] ... value mask:             0000ffffffffffff", "[    0.044040] ... max period:             000000007fffffff", "[    0.044042] ... fixed-purpose events:   3", "[    0.044043] ... event mask:             000000070000000f", "[    0.055842] KVM setup paravirtual spinlock", "[    0.057462] x86: Booted up 1 node, 1 CPUs", "[    0.057467] smpboot: Total of 1 processors activated (3599.99 BogoMIPS)", "[    0.057784] NMI watchdog: enabled on all CPUs, permanently consumes one hw-PMU counter.", "[    0.057889] devtmpfs: initialized", "[    0.059808] EVM: security.selinux", "[    0.059810] EVM: security.SMACK64", "[    0.059812] EVM: security.ima", "[    0.059813] EVM: security.capability", "[    0.060651] pinctrl core: initialized pinctrl subsystem", "[    0.060727] regulator-dummy: no parameters", "[    0.060820] RTC time:  3:10:20, date: 08/25/16", "[    0.060865] NET: Registered protocol family 16", "[    0.060990] cpuidle: using governor ladder", "[    0.060993] cpuidle: using governor menu", "[    0.061037] ACPI: bus type PCI registered", "[    0.061039] acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5", "[    0.061179] PCI: Using configuration type 1 for base access", "[    0.061999] bio: create slab <bio-0> at 0", "[    0.062211] ACPI: Added _OSI(Module Device)", "[    0.062214] ACPI: Added _OSI(Processor Device)", "[    0.062216] ACPI: Added _OSI(3.0 _SCP Extensions)", "[    0.062217] ACPI: Added _OSI(Processor Aggregator Device)", "[    0.063967] ACPI: Interpreter enabled", "[    0.063973] ACPI Exception: AE_NOT_FOUND, While evaluating Sleep State [_S1_] (20131115/hwxface-580)", "[    0.063979] ACPI Exception: AE_NOT_FOUND, While evaluating Sleep State [_S2_] (20131115/hwxface-580)", "[    0.063990] ACPI: (supports S0 S3 S4 S5)", "[    0.063992] ACPI: Using IOAPIC for interrupt routing", "[    0.064009] PCI: Using host bridge windows from ACPI; if necessary, use \"pci=nocrs\" and report a bug", "[    0.064272] ACPI: No dock devices found.", "[    0.066824] ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-ff])", "[    0.066832] acpi PNP0A03:00: _OSC: OS supports [ASPM ClockPM Segments MSI]", "[    0.066838] acpi PNP0A03:00: _OSC failed (AE_NOT_FOUND); disabling ASPM", "[    0.066906] acpi PNP0A03:00: fail to add MMCONFIG information, can't access extended PCI configuration space under this bridge.", "[    0.067185] acpiphp: Slot [3] registered", "[    0.067207] acpiphp: Slot [4] registered", "[    0.067226] acpiphp: Slot [5] registered", "[    0.067245] acpiphp: Slot [6] registered", "[    0.067264] acpiphp: Slot [7] registered", "[    0.067289] acpiphp: Slot [8] registered", "[    0.067308] acpiphp: Slot [9] registered", "[    0.067332] acpiphp: Slot [10] registered", "[    0.067351] acpiphp: Slot [11] registered", "[    0.067369] acpiphp: Slot [12] registered", "[    0.067387] acpiphp: Slot [13] registered", "[    0.067405] acpiphp: Slot [14] registered", "[    0.067422] acpiphp: Slot [15] registered", "[    0.067440] acpiphp: Slot [16] registered", "[    0.067463] acpiphp: Slot [17] registered", "[    0.067483] acpiphp: Slot [18] registered", "[    0.067506] acpiphp: Slot [19] registered", "[    0.067525] acpiphp: Slot [20] registered", "[    0.067542] acpiphp: Slot [21] registered", "[    0.067559] acpiphp: Slot [22] registered", "[    0.067577] acpiphp: Slot [23] registered", "[    0.067602] acpiphp: Slot [24] registered", "[    0.067621] acpiphp: Slot [25] registered", "[    0.067638] acpiphp: Slot [26] registered", "[    0.067662] acpiphp: Slot [27] registered", "[    0.067681] acpiphp: Slot [28] registered", "[    0.067699] acpiphp: Slot [29] registered", "[    0.067716] acpiphp: Slot [30] registered", "[    0.067739] acpiphp: Slot [31] registered", "[    0.067751] PCI host bridge to bus 0000:00", "[    0.067754] pci_bus 0000:00: root bus resource [bus 00-ff]", "[    0.067758] pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7]", "[    0.067760] pci_bus 0000:00: root bus resource [io  0x0d00-0xffff]", "[    0.067763] pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff]", "[    0.067765] pci_bus 0000:00: root bus resource [mem 0x80000000-0xfebfffff]", "[    0.067802] pci 0000:00:00.0: [8086:1237] type 00 class 0x060000", "[    0.068173] pci 0000:00:01.0: [8086:7000] type 00 class 0x060100", "[    0.068658] pci 0000:00:01.1: [8086:7010] type 00 class 0x010180", "[    0.076009] pci 0000:00:01.1: reg 0x20: [io  0xc100-0xc10f]", "[    0.080209] pci 0000:00:01.2: [8086:7020] type 00 class 0x0c0300", "[    0.085893] pci 0000:00:01.2: reg 0x20: [io  0xc080-0xc09f]", "[    0.090018] pci 0000:00:01.3: [8086:7113] type 00 class 0x068000", "[    0.090386] pci 0000:00:01.3: quirk: [io  0xb000-0xb03f] claimed by PIIX4 ACPI", "[    0.090400] pci 0000:00:01.3: quirk: [io  0xb100-0xb10f] claimed by PIIX4 SMB", "[    0.090605] pci 0000:00:02.0: [1013:00b8] type 00 class 0x030000", "[    0.093424] pci 0000:00:02.0: reg 0x10: [mem 0xfc000000-0xfdffffff pref]", "[    0.096031] pci 0000:00:02.0: reg 0x14: [mem 0xfebd0000-0xfebd0fff]", "[    0.107724] pci 0000:00:02.0: reg 0x30: [mem 0xfebc0000-0xfebcffff pref]", "[    0.108085] pci 0000:00:03.0: [1af4:1000] type 00 class 0x020000", "[    0.111755] pci 0000:00:03.0: reg 0x10: [io  0xc0a0-0xc0bf]", "[    0.113049] pci 0000:00:03.0: reg 0x14: [mem 0xfebd1000-0xfebd1fff]", "[    0.124014] pci 0000:00:03.0: reg 0x30: [mem 0xfeb40000-0xfeb7ffff pref]", "[    0.124415] pci 0000:00:04.0: [1af4:1000] type 00 class 0x020000", "[    0.126582] pci 0000:00:04.0: reg 0x10: [io  0xc0c0-0xc0df]", "[    0.128008] pci 0000:00:04.0: reg 0x14: [mem 0xfebd2000-0xfebd2fff]", "[    0.139070] pci 0000:00:04.0: reg 0x30: [mem 0xfeb80000-0xfebbffff pref]", "[    0.139429] pci 0000:00:05.0: [1af4:1004] type 00 class 0x010000", "[    0.141552] pci 0000:00:05.0: reg 0x10: [io  0xc000-0xc03f]", "[    0.145651] pci 0000:00:05.0: reg 0x14: [mem 0xfebd3000-0xfebd3fff]", "[    0.157476] pci 0000:00:06.0: [1af4:1001] type 00 class 0x010000", "[    0.159695] pci 0000:00:06.0: reg 0x10: [io  0xc040-0xc07f]", "[    0.161124] pci 0000:00:06.0: reg 0x14: [mem 0xfebd4000-0xfebd4fff]", "[    0.172343] pci 0000:00:07.0: [1af4:1002] type 00 class 0x00ff00", "[    0.173476] pci 0000:00:07.0: reg 0x10: [io  0xc0e0-0xc0ff]", "[    0.181277] ACPI: PCI Interrupt Link [LNKA] (IRQs 5 *10 11)", "[    0.181385] ACPI: PCI Interrupt Link [LNKB] (IRQs 5 *10 11)", "[    0.181468] ACPI: PCI Interrupt Link [LNKC] (IRQs 5 10 *11)", "[    0.181544] ACPI: PCI Interrupt Link [LNKD] (IRQs 5 10 *11)", "[    0.181592] ACPI: PCI Interrupt Link [LNKS] (IRQs *9)", "[    0.181902] ACPI: Enabled 16 GPEs in block 00 to 0F", "[    0.181913] ACPI: _SB_.PCI0: notify handler is installed", "[    0.181934] Found 1 acpi root devices", "[    0.182180] vgaarb: setting as boot device: PCI:0000:00:02.0", "[    0.182184] vgaarb: device added: PCI:0000:00:02.0,decodes=io+mem,owns=io+mem,locks=none", "[    0.182187] vgaarb: loaded", "[    0.182189] vgaarb: bridge control possible 0000:00:02.0", "[    0.182456] SCSI subsystem initialized", "[    0.182585] libata version 3.00 loaded.", "[    0.182627] ACPI: bus type USB registered", "[    0.182649] usbcore: registered new interface driver usbfs", "[    0.182659] usbcore: registered new interface driver hub", "[    0.182694] usbcore: registered new device driver usb", "[    0.182852] PCI: Using ACPI for IRQ routing", "[    0.182858] PCI: pci_cache_line_size set to 64 bytes", "[    0.183043] e820: reserve RAM buffer [mem 0x0009fc00-0x0009ffff]", "[    0.183048] e820: reserve RAM buffer [mem 0x1fffe000-0x1fffffff]", "[    0.183184] NetLabel: Initializing", "[    0.183187] NetLabel:  domain hash size = 128", "[    0.183188] NetLabel:  protocols = UNLABELED CIPSOv4", "[    0.183234] NetLabel:  unlabeled traffic allowed by default", "[    0.183321] hpet0: at MMIO 0xfed00000, IRQs 2, 8, 0", "[    0.183326] hpet0: 3 comparators, 64-bit 100.000000 MHz counter", "[    0.185845] Switched to clocksource kvm-clock", "[    0.192187] AppArmor: AppArmor Filesystem Enabled", "[    0.192213] pnp: PnP ACPI init", "[    0.192226] ACPI: bus type PNP registered", "[    0.192317] pnp 00:00: Plug and Play ACPI device, IDs PNP0b00 (active)", "[    0.192377] pnp 00:01: Plug and Play ACPI device, IDs PNP0303 (active)", "[    0.192418] pnp 00:02: Plug and Play ACPI device, IDs PNP0f13 (active)", "[    0.192454] pnp 00:03: [dma 2]", "[    0.192466] pnp 00:03: Plug and Play ACPI device, IDs PNP0700 (active)", "[    0.192571] pnp 00:04: Plug and Play ACPI device, IDs PNP0501 (active)", "[    0.192692] pnp 00:05: Plug and Play ACPI device, IDs PNP0103 (active)", "[    0.192778] pnp: PnP ACPI: found 6 devices", "[    0.192780] ACPI: bus type PNP unregistered", "[    0.198590] pci_bus 0000:00: resource 4 [io  0x0000-0x0cf7]", "[    0.198593] pci_bus 0000:00: resource 5 [io  0x0d00-0xffff]", "[    0.198595] pci_bus 0000:00: resource 6 [mem 0x000a0000-0x000bffff]", "[    0.198597] pci_bus 0000:00: resource 7 [mem 0x80000000-0xfebfffff]", "[    0.198631] NET: Registered protocol family 2", "[    0.198889] TCP established hash table entries: 4096 (order: 3, 32768 bytes)", "[    0.198926] TCP bind hash table entries: 4096 (order: 4, 65536 bytes)", "[    0.198987] TCP: Hash tables configured (established 4096 bind 4096)", "[    0.199050] TCP: reno registered", "[    0.199053] UDP hash table entries: 256 (order: 1, 8192 bytes)", "[    0.199068] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)", "[    0.199141] NET: Registered protocol family 1", "[    0.199151] pci 0000:00:00.0: Limiting direct PCI/PCI transfers", "[    0.199174] pci 0000:00:01.0: PIIX3: Enabling Passive Release", "[    0.199195] pci 0000:00:01.0: Activating ISA DMA hang workarounds", "[    0.199482] ACPI: PCI Interrupt Link [LNKD] enabled at IRQ 11", "[    0.200295] pci 0000:00:02.0: Video device with shadowed ROM", "[    0.200345] PCI: CLS 0 bytes, default 64", "[    0.200450] Trying to unpack rootfs image as initramfs..."];
var messages = '';
var i = 0;
var bootView = document.querySelector('#boot-view');

interv();

function interv() {
    var ivl = setInterval(function() {
        if (bootLog[i] == null) {
            clearInterval(ivl);
            setTimeout(function() {
                setView('boot2');
            }, 500);
            return
        }
        if (i != 0) {
            messages += '<br>' + bootLog[i];
        } else {
            messages = bootLog[i];
        }
        i++;
        bootView.innerHTML = messages;
        bootView.scrollTop = bootView.scrollHeight;
    }, 20);
}